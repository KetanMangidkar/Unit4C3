const express = require("express");

const userController = require("./controllers/user.controllers");
const bookController = require("./controllers/book.controllers");
const publicationController = require("./controllers/publication.controllers");
const commentController = require("./controllers/comment.controllers");

const app = express();

app.use(express.json());

app.use("/user", userController);
app.use("/book", bookController);
app.use("/publication", publicationController);
app.use("/comment", commentController);

module.exports = app;