// import { MikroORM } from "@mikro-orm/core";
// import { DB_NAME, __prod__, DB_PASSWORD, DB_TYPE, DB_USER } from "./constants";
// import { Post } from "./entities/Post";
// import path from "path";
// import { User } from "./entities/User";

// export default {
//   migrations: {
//     path: path.join(__dirname, "./migrations"),
//     pattern: /^[\w-]+\d+\.[tj]s$/,
//   },
//   entities: [Post, User],
//   dbName: DB_NAME,
//   user: DB_USER,
//   password: DB_PASSWORD,
//   type: DB_TYPE,
//   debug: !__prod__,
// } as Parameters<typeof MikroORM.init>[0];
