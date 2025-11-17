const express = require("express");
const indexRouter = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
  {
    text: "What's up bitches!",
    user: "Becky",
    added: new Date(),
  },
  {
    text: "The winter is coming",
    user: "Amy",
    added: new Date(),
  },
  {
    text: "the dog gone rouge",
    user: "Jeremiah",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) =>
  res.render("index", { messages_all: messages })
);

indexRouter.get("/new", (req, res) => res.render("form", {}));

indexRouter.post("/new", function (req, res) {
  messages.push({
    text: req.body.message_text,
    user: req.body.author_name,
    added: new Date(),
  });
  return res.redirect("/");
});

module.exports = indexRouter;
