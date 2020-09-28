import "reflect-metadata";
import { createConnection } from "typeorm";
import {
  COOKIE_NAME,
  customSecret,
  DB_NAME,
  DB_PASSWORD,
  DB_TYPE,
  DB_USER,
  FRONT_END_ORIGIN,
  __prod__,
} from "./constants";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { PostsResolver } from "./resolvers/posts";
import { UserResolver } from "./resolvers/User";
import Redis from "ioredis";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from "cors";
import { Post } from "./entities/Post";
import { User } from "./entities/User";
// import { sendEmail } from "./utils/sendEmail";

const main = async () => {
  // sendEmail("info@newsfeedxtra.com", "This is testing nodemailer!!!");
  createConnection({
    type: DB_TYPE,
    database: DB_NAME,
    username: DB_USER,
    password: DB_PASSWORD,
    logging: true,
    synchronize: true,
    entities: [Post, User],
  });
  const app = express();
  const RedisStore = connectRedis(session);
  const redis = new Redis();
  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, //10 years
        httpOnly: true,
        sameSite: "lax",
        secure: __prod__,
      },
      secret: customSecret!,
      resave: false,
      saveUninitialized: false,
    })
  );
  app.use(
    cors({
      origin: FRONT_END_ORIGIN,
      credentials: true,
    })
  );
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, PostsResolver, UserResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ req, res, redis }),
  });
  apolloServer.applyMiddleware({ app, cors: false });
  app.listen(2020, () => {
    console.log("We are serving from express!!");
  });
};

main();
