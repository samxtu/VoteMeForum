import { isAuth } from "../middleware/isAuth";
import { MyContext } from "../types";
import {
  Arg,
  Mutation,
  Query,
  Resolver,
  InputType,
  Field,
  Ctx,
  UseMiddleware,
  Int,
  FieldResolver,
  Root,
  ObjectType,
} from "type-graphql";
import { Post } from "../entities/Post";
import { getConnection } from "typeorm";
import { Updoot } from "../entities/Updoot";

@InputType()
class PostInput {
  @Field()
  title: string;
  @Field()
  text: string;
}

@ObjectType()
class PaginatedPosts {
  @Field(() => [Post])
  posts: Post[];
  @Field()
  hasMore: boolean;
}

@Resolver(Post)
export class PostsResolver {
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async vote(
    @Arg("postId", () => Int) postId: number,
    @Arg("value", () => Int) value: number,
    @Ctx() { req }: MyContext
  ) {
    const { userId } = req.session;
    const updoot = await Updoot.findOne({ where: { postId, userId } });
    console.log("updoot found :", updoot);
    const updootValue = value !== -1 ? 1 : -1;
    if (updoot && updoot.value !== updootValue) {
      //changing my vote as the constitution allow me
      getConnection()
        .transaction(async () => {
          console.log(
            "well the updoot is different coz from db: " +
              updoot.value +
              " and from client: " +
              updootValue
          );
          updoot.value = updootValue;
          await Updoot.save(updoot);
          const post = await Post.findOne(postId);
          if (post) {
            console.log("we found the post and will try to updoot");
            post.points = post.points + 2 * updootValue;
            await Post.save(post);
          }
        })
        .catch((err) => {
          console.error(err.message);
        });
    } else if (!updoot) {
      getConnection()
        .transaction(async () => {
          console.log(
            "well the updoot is not in db and from client: " + updootValue
          );
          await Updoot.insert({
            userId,
            postId,
            value: updootValue,
          });
          const post = await Post.findOne(postId);
          if (post) {
            post.points = post.points + updootValue;
            await Post.save(post);
          }
        })
        .catch((err) => {
          console.error(err.message);
        });
    }
    console.log("you must have got something");
    return true;
  }

  @FieldResolver(() => String)
  textSnippet(@Root() orgTxt: Post) {
    if (orgTxt.text.length > 50) return orgTxt.text.slice(0, 50).concat("...");
    return orgTxt.text;
  }

  @FieldResolver(() => Int, { nullable: true })
  voteStatus(@Root() post: Post, @Ctx() { req }: MyContext) {
    let status: null | number = null;
    post.updoots.forEach((ud) => {
      if (ud && ud.postId === post.id && ud.userId === req.session.userId)
        status = ud.value;
    });
    return status;
  }

  @Query(() => PaginatedPosts)
  async posts(
    @Arg("limit", () => Int) limit: number,
    @Arg("cursor", () => Int, { nullable: true }) cursor: number
  ): Promise<PaginatedPosts> {
    const realLimit = Math.min(50, limit) + 1;
    const qb = getConnection()
      .getRepository(Post)
      .createQueryBuilder("p")
      .innerJoinAndSelect("p.creator", "u", 'p."creatorId" = u.id')
      .leftJoinAndSelect("p.updoots", "updoot", 'updoot."postId" = p.id')
      .orderBy("p.id", "DESC")
      .take(realLimit);

    if (cursor)
      qb.where("p.id < :cursor", {
        cursor: cursor,
      });
    const reqRes: Post[] = await qb.getMany();
    return {
      posts: reqRes.slice(0, realLimit - 1),
      hasMore: reqRes.length === realLimit,
    };
  }

  @Query(() => Post, { nullable: true })
  post(@Arg("id") id: number): Promise<Post | undefined> {
    return Post.findOne(id);
  }

  @Mutation(() => Post)
  @UseMiddleware(isAuth)
  async createPost(
    @Arg("args") args: PostInput,
    @Ctx() { req }: MyContext
  ): Promise<Post> {
    return Post.create({ ...args, creatorId: req.session.userId }).save();
  }

  @Mutation(() => Post, { nullable: true })
  async editPost(
    @Arg("id") id: number,
    @Arg("title", () => String, { nullable: true }) title: string
  ): Promise<Post | null> {
    const post = await Post.findOne(id);
    if (!post) return null;
    if (typeof title === "string") await Post.update({ id }, { title });
    return post;
  }

  @Mutation(() => Boolean)
  async deletePost(@Arg("id") id: number): Promise<boolean> {
    await Post.delete(id);
    return true;
  }
}
