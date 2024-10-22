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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsResolver = void 0;
const isAuth_1 = require("../middleware/isAuth");
const type_graphql_1 = require("type-graphql");
const Post_1 = require("../entities/Post");
const typeorm_1 = require("typeorm");
const Updoot_1 = require("../entities/Updoot");
let PostInput = class PostInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], PostInput.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], PostInput.prototype, "text", void 0);
PostInput = __decorate([
    type_graphql_1.InputType()
], PostInput);
let PaginatedPosts = class PaginatedPosts {
};
__decorate([
    type_graphql_1.Field(() => [Post_1.Post]),
    __metadata("design:type", Array)
], PaginatedPosts.prototype, "posts", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], PaginatedPosts.prototype, "hasMore", void 0);
PaginatedPosts = __decorate([
    type_graphql_1.ObjectType()
], PaginatedPosts);
let PostsResolver = class PostsResolver {
    vote(postId, value, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = req.session;
            const updoot = yield Updoot_1.Updoot.findOne({ where: { postId, userId } });
            console.log("updoot found :", updoot);
            const updootValue = value !== -1 ? 1 : -1;
            if (updoot && updoot.value !== updootValue) {
                typeorm_1.getConnection()
                    .transaction(() => __awaiter(this, void 0, void 0, function* () {
                    console.log("well the updoot is different coz from db: " +
                        updoot.value +
                        " and from client: " +
                        updootValue);
                    updoot.value = updootValue;
                    yield Updoot_1.Updoot.save(updoot);
                    const post = yield Post_1.Post.findOne(postId);
                    if (post) {
                        console.log("we found the post and will try to updoot");
                        post.points = post.points + 2 * updootValue;
                        yield Post_1.Post.save(post);
                    }
                }))
                    .catch((err) => {
                    console.error(err.message);
                });
            }
            else if (!updoot) {
                typeorm_1.getConnection()
                    .transaction(() => __awaiter(this, void 0, void 0, function* () {
                    console.log("well the updoot is not in db and from client: " + updootValue);
                    yield Updoot_1.Updoot.insert({
                        userId,
                        postId,
                        value: updootValue,
                    });
                    const post = yield Post_1.Post.findOne(postId);
                    if (post) {
                        post.points = post.points + updootValue;
                        yield Post_1.Post.save(post);
                    }
                }))
                    .catch((err) => {
                    console.error(err.message);
                });
            }
            console.log("you must have got something");
            return true;
        });
    }
    textSnippet(orgTxt) {
        if (orgTxt.text.length > 50)
            return orgTxt.text.slice(0, 50).concat("...");
        return orgTxt.text;
    }
    voteStatus(post, { req }) {
        let status = null;
        post.updoots.forEach((ud) => {
            if (ud && ud.postId === post.id && ud.userId === req.session.userId)
                status = ud.value;
        });
        return status;
    }
    posts(limit, cursor) {
        return __awaiter(this, void 0, void 0, function* () {
            const realLimit = Math.min(50, limit) + 1;
            const qb = typeorm_1.getConnection()
                .getRepository(Post_1.Post)
                .createQueryBuilder("p")
                .innerJoinAndSelect("p.creator", "u", 'p."creatorId" = u.id')
                .leftJoinAndSelect("p.updoots", "updoot", 'updoot."postId" = p.id')
                .orderBy("p.id", "DESC")
                .take(realLimit);
            if (cursor)
                qb.where("p.id < :cursor", {
                    cursor: cursor,
                });
            const reqRes = yield qb.getMany();
            return {
                posts: reqRes.slice(0, realLimit - 1),
                hasMore: reqRes.length === realLimit,
            };
        });
    }
    post(id) {
        return Post_1.Post.findOne(id);
    }
    createPost(args, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            return Post_1.Post.create(Object.assign(Object.assign({}, args), { creatorId: req.session.userId })).save();
        });
    }
    editPost(id, title) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield Post_1.Post.findOne(id);
            if (!post)
                return null;
            if (typeof title === "string")
                yield Post_1.Post.update({ id }, { title });
            return post;
        });
    }
    deletePost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Post_1.Post.delete(id);
            return true;
        });
    }
};
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    type_graphql_1.UseMiddleware(isAuth_1.isAuth),
    __param(0, type_graphql_1.Arg("postId", () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Arg("value", () => type_graphql_1.Int)),
    __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], PostsResolver.prototype, "vote", null);
__decorate([
    type_graphql_1.FieldResolver(() => String),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Post_1.Post]),
    __metadata("design:returntype", void 0)
], PostsResolver.prototype, "textSnippet", null);
__decorate([
    type_graphql_1.FieldResolver(() => type_graphql_1.Int, { nullable: true }),
    __param(0, type_graphql_1.Root()), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Post_1.Post, Object]),
    __metadata("design:returntype", void 0)
], PostsResolver.prototype, "voteStatus", null);
__decorate([
    type_graphql_1.Query(() => PaginatedPosts),
    __param(0, type_graphql_1.Arg("limit", () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Arg("cursor", () => type_graphql_1.Int, { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PostsResolver.prototype, "posts", null);
__decorate([
    type_graphql_1.Query(() => Post_1.Post, { nullable: true }),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostsResolver.prototype, "post", null);
__decorate([
    type_graphql_1.Mutation(() => Post_1.Post),
    type_graphql_1.UseMiddleware(isAuth_1.isAuth),
    __param(0, type_graphql_1.Arg("args")),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PostInput, Object]),
    __metadata("design:returntype", Promise)
], PostsResolver.prototype, "createPost", null);
__decorate([
    type_graphql_1.Mutation(() => Post_1.Post, { nullable: true }),
    __param(0, type_graphql_1.Arg("id")),
    __param(1, type_graphql_1.Arg("title", () => String, { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], PostsResolver.prototype, "editPost", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostsResolver.prototype, "deletePost", null);
PostsResolver = __decorate([
    type_graphql_1.Resolver(Post_1.Post)
], PostsResolver);
exports.PostsResolver = PostsResolver;
//# sourceMappingURL=posts.js.map