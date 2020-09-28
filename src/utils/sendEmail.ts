"use strict";
import nodemailer from "nodemailer";
import {
  EMAIL_SERVER,
  SENDER_EMAIL,
  SENDER_EMAIL_PASSWORD,
} from "../constants";

// async..await is not allowed in global scope, must use a wrapper
export async function sendEmail(to: string, text: string, html?: string) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: EMAIL_SERVER,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: SENDER_EMAIL, // sender email
      pass: SENDER_EMAIL_PASSWORD, // sender password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"Sam Xtu 👻" ${SENDER_EMAIL}`, // sender address
    to, // list of receivers
    subject: "Change password", // Subject line
    text: text,
    html: html ? html : text, // html body
  });

  console.log("Message sent: %s", info.messageId);
}
