import bodyParser from "body-parser";
import express from "express";
module.exports = app => {
 app.set("port", 3000);
 app.set("json spaces", 4);
 app.use(bodyParser.json());
 app.use(app.auth.initialize());
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("authorization","JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTI5MH0.ZCAC5qYXEt5O4NbNSNzAHXRRsD7ylPXsul58Ic2Ufu4");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  delete req.body.id;
  next();
 });
 app.use(express.static("public"));
};