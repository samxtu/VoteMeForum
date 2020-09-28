"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EMAIL_SERVER = exports.SENDER_EMAIL_PASSWORD = exports.SENDER_EMAIL = exports.FORGET_PASSWORD_PREFIX = exports.DB_TYPE = exports.DB_PASSWORD = exports.DB_USER = exports.DB_NAME = exports.FRONT_END_ORIGIN = exports.COOKIE_NAME = exports.customSecret = exports.__prod__ = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.__prod__ = process.env.NODE_ENV === "production";
exports.customSecret = process.env.MY_SESSION_SECRET;
exports.COOKIE_NAME = "xtu";
exports.FRONT_END_ORIGIN = "http://localhost:3000";
exports.DB_NAME = "votemeforum";
exports.DB_USER = "postgres";
exports.DB_PASSWORD = "postgres";
exports.DB_TYPE = "postgres";
exports.FORGET_PASSWORD_PREFIX = "forget_password";
exports.SENDER_EMAIL = process.env.MY_SENDER_EMAIL;
exports.SENDER_EMAIL_PASSWORD = process.env.MY_SENDER_EMAIL_PASSWORD;
exports.EMAIL_SERVER = process.env.MY_SSL_EMAIL_SERVER;
//# sourceMappingURL=constants.js.map