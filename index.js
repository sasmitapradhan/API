import express from "express";
import consign from "consign";
const app = express();
consign()
.include("libs/config.js")
.include("db.js")
.then("auth.js")
.then("libs/middlewares.js")
.include("routes")
.then("libs/boot.js")
.into(app);
