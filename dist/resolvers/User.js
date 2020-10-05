"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const User_1 = require("../entities/User");
const type_graphql_1 = require("type-graphql");
const argon2_1 = __importDefault(require("argon2"));
const constants_1 = require("../constants");
const sendEmail_1 = require("../utils/sendEmail");
const uuid_1 = require("uuid");
let NameOrEmailPasswordArgs = class NameOrEmailPasswordArgs {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], NameOrEmailPasswordArgs.prototype, "usernameOrEmail", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], NameOrEmailPasswordArgs.prototype, "password", void 0);
NameOrEmailPasswordArgs = __decorate([
    type_graphql_1.InputType()
], NameOrEmailPasswordArgs);
let UsernameEmailPasswordArgs = class UsernameEmailPasswordArgs {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UsernameEmailPasswordArgs.prototype, "username", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UsernameEmailPasswordArgs.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UsernameEmailPasswordArgs.prototype, "password", void 0);
UsernameEmailPasswordArgs = __decorate([
    type_graphql_1.InputType()
], UsernameEmailPasswordArgs);
let FieldError = class FieldError {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], FieldError.prototype, "target", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], FieldError.prototype, "message", void 0);
FieldError = __decorate([
    type_graphql_1.ObjectType()
], FieldError);
let UserResponse = class UserResponse {
};
__decorate([
    type_graphql_1.Field(() => [FieldError], { nullable: true }),
    __metadata("design:type", Array)
], UserResponse.prototype, "errors", void 0);
__decorate([
    type_graphql_1.Field(() => User_1.User, { nullable: true }),
    __metadata("design:type", User_1.User)
], UserResponse.prototype, "user", void 0);
UserResponse = __decorate([
    type_graphql_1.ObjectType()
], UserResponse);
let UserResolver = class UserResolver {
    email(user, { req }) {
        if (req.session.userId === user.id)
            return user.email;
        return "";
    }
    forgotPassword(email, { redis }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.User.findOne({ where: { email } });
            if (user) {
                const token = uuid_1.v4();
                const key = constants_1.FORGET_PASSWORD_PREFIX + token;
                try {
                    redis.set(key, user.id, "ex", 1000 * 60 * 60 * 24 * 3);
                    sendEmail_1.sendEmail(user.email, "Reset email here", `<a href='${constants_1.FRONT_END_ORIGIN}/reset-email/${token}'>Click this link</a>`);
                }
                catch (err) {
                    console.error(err);
                }
            }
            return true;
        });
    }
    resetPassword(newPassword, token, { req, redis }) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = constants_1.FORGET_PASSWORD_PREFIX + token;
            const userId = yield redis.get(key);
            if (!userId)
                return {
                    errors: [
                        {
                            target: "Token",
                            message: "Token expired, try forgot password again!",
                        },
                    ],
                };
            let clumsyUser = undefined;
            const idNum = parseInt(userId);
            try {
                clumsyUser = yield User_1.User.findOne(idNum);
            }
            catch (err) {
                console.error(err);
            }
            yield redis.del(key);
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
            const hashedpass = yield argon2_1.default.hash(newPassword);
            clumsyUser.password = hashedpass;
            yield User_1.User.update({ id: idNum }, { password: hashedpass });
            req.session.userId = clumsyUser.id;
            return { user: clumsyUser };
        });
    }
    register(params, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (params.username.includes("@"))
                return {
                    errors: [
                        {
                            target: "username",
                            message: "Username should contain @ character!",
                        },
                    ],
                };
            const hashedPassword = yield argon2_1.default.hash(params.password);
            let user;
            try {
                user = yield User_1.User.create({
                    username: params.username.toLowerCase(),
                    email: params.email,
                    password: hashedPassword,
                }).save();
                console.log("user: ", user);
            }
            catch (err) {
                if (err.code === "23505")
                    return {
                        errors: [
                            {
                                target: "username",
                                message: "username already taken!",
                            },
                        ],
                    };
                console.error(err.message);
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
        });
    }
    login(params, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const similarUser = yield User_1.User.findOne(params.usernameOrEmail.includes("@")
                ? {
                    where: { email: params.usernameOrEmail.toLowerCase() },
                }
                : {
                    where: { username: params.usernameOrEmail.toLowerCase() },
                });
            if (!similarUser)
                return {
                    errors: [
                        {
                            target: "usernameOrEmail",
                            message: "user not found.",
                        },
                    ],
                };
            const valid = yield argon2_1.default.verify(similarUser.password, params.password);
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
        });
    }
    me({ req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const meUser = yield User_1.User.findOne(req.session.userId);
            return meUser;
        });
    }
    logout({ req, res }) {
        return __awaiter(this, void 0, void 0, function* () {
            res.clearCookie(constants_1.COOKIE_NAME);
            const sesh = yield new Promise((resolve) => {
                req.session.destroy((err) => {
                    if (err) {
                        console.log(err);
                        return resolve(false);
                    }
                    return resolve(true);
                });
            });
            return sesh;
        });
    }
};
__decorate([
    type_graphql_1.FieldResolver(() => String),
    __param(0, type_graphql_1.Root()), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User, Object]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "email", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg("email")),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "forgotPassword", null);
__decorate([
    type_graphql_1.Mutation(() => UserResponse),
    __param(0, type_graphql_1.Arg("newPassword")),
    __param(1, type_graphql_1.Arg("token")),
    __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "resetPassword", null);
__decorate([
    type_graphql_1.Mutation(() => UserResponse),
    __param(0, type_graphql_1.Arg("params")),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UsernameEmailPasswordArgs, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "register", null);
__decorate([
    type_graphql_1.Mutation(() => UserResponse),
    __param(0, type_graphql_1.Arg("params")),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [NameOrEmailPasswordArgs, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
__decorate([
    type_graphql_1.Query(() => User_1.User, { nullable: true }),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "me", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "logout", null);
UserResolver = __decorate([
    type_graphql_1.Resolver(User_1.User)
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=User.js.map