import { User } from "../entities/User";
import { MyContext } from "../types";
import {
  Resolver,
  Mutation,
  Query,
  Ctx,
  Arg,
  InputType,
  Field,
  ObjectType,
} from "type-graphql";
import dragon from "argon2";
import {
  COOKIE_NAME,
  FORGET_PASSWORD_PREFIX,
  FRONT_END_ORIGIN,
} from "../constants";
import { sendEmail } from "../utils/sendEmail";
import { v4 } from "uuid";

@InputType()
class NameOrEmailPasswordArgs {
  @Field()
  usernameOrEmail: string;
  @Field()
  password: string;
}

@InputType()
class UsernameEmailPasswordArgs {
  @Field()
  username: string;
  @Field()
  email: string;
  @Field()
  password: string;
}

@ObjectType()
class FieldError {
  @Field()
  target: string;
  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];
  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver()
export class UserResolver {
  @Mutation(() => Boolean)
  async forgotPassword(
    @Arg("email") email: string,
    @Ctx() { redis }: MyContext
  ) {
    const user = await User.findOne({ where: { email } });
    if (user) {
      const token = v4();
      const key = FORGET_PASSWORD_PREFIX + token;
      try {
        redis.set(key, user.id, "ex", 1000 * 60 * 60 * 24 * 3); //3 days expiry time
        sendEmail(
          user.email,
          "Reset email here",
          `<a href='${FRONT_END_ORIGIN}/reset-email/${token}'>Click this link</a>`
        );
      } catch (err) {
        console.error(err);
      }
    }
    return true;
  }

  @Mutation(() => UserResponse)
  async resetPassword(
    @Arg("newPassword") newPassword: string,
    @Arg("token") token: string,
    @Ctx() { req, redis }: MyContext
  ): Promise<UserResponse> {
    const key = FORGET_PASSWORD_PREFIX + token;
    const userId = await redis.get(key);
    if (!userId)
      return {
        errors: [
          {
            target: "Token",
            message: "Token expired, try forgot password again!",
          },
        ],
      };
    let clumsyUser: User | undefined = undefined;
    const idNum = parseInt(userId);
    try {
      clumsyUser = await User.findOne(idNum);
    } catch (err) {
      console.error(err);
    }
    await redis.del(key);
    if (!clumsyUser) {
      return {
        errors: [
          {
            target: "User",
            message: "User not found!",
          },
        ],
      };
    }
    const hashedpass = await dragon.hash(newPassword);
    clumsyUser.password = hashedpass;
    await User.update({ id: idNum }, { password: hashedpass });
    req.session.userId = clumsyUser.id;
    return { user: clumsyUser };
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("params") params: UsernameEmailPasswordArgs,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    if (params.username.includes("@"))
      return {
        errors: [
          {
            target: "username",
            message: "Username should contain @ character!",
          },
        ],
      };
    const hashedPassword = await dragon.hash(params.password);
    let user: User;
    try {
      user = await User.create({
        username: params.username.toLowerCase(),
        email: params.email,
        password: hashedPassword,
      }).save();
    } catch (err) {
      if (err.code === "23505")
        return {
          errors: [
            {
              target: "username",
              message: "username already taken!",
            },
          ],
        };
      return {
        errors: [
          {
            target: "general",
            message: "Something went wrong, try again!",
          },
        ],
      };
    }

    req.session.userId = user.id;
    return { user };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("params") params: NameOrEmailPasswordArgs,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    const similarUser = await User.findOne(
      params.usernameOrEmail.includes("@")
        ? {
            where: { email: params.usernameOrEmail.toLowerCase() },
          }
        : {
            where: { username: params.usernameOrEmail.toLowerCase() },
          }
    );
    if (!similarUser)
      return {
        errors: [
          {
            target: "usernameOrEmail",
            message: "user not found.",
          },
        ],
      };
    const valid = await dragon.verify(similarUser.password, params.password);
    if (!valid) {
      return {
        errors: [
          {
            target: "password",
            message: "password not correct!",
          },
        ],
      };
    }
    req.session.userId = similarUser.id;
    return { user: similarUser };
  }

  @Query(() => User, { nullable: true })
  async me(@Ctx() { req }: MyContext): Promise<User | undefined> {
    const meUser = await User.findOne(req.session.userId);
    return meUser;
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() { req, res }: MyContext) {
    res.clearCookie(COOKIE_NAME);
    const sesh = await new Promise((resolve) => {
      req.session.destroy((err) => {
        if (err) {
          console.log(err);
          return resolve(false);
        }
        return resolve(true);
      });
    });
    return sesh;
  }
}
