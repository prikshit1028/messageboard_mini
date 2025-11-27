const express = require("express");
const indexRouter = express.Router();
const indexcontroller = require("../controllers/indexcontrollers");

// const messages = [
//   {
//     text: "Hi there!",
//     user: "Amando",
//     added: new Date(),
//   },
//   {
//     text: "Hello World!",
//     user: "Charles",
//     added: new Date(),
//   },
//   {
//     text: "What's up bitches!",
//     user: "Becky",
//     added: new Date(),
//   },
//   {
//     text: "The winter is coming",
//     user: "Amy",
//     added: new Date(),
//   },
//   {
//     text: "the dog gone rouge",
//     user: "Jeremiah",
//     added: new Date(),
//   },
// ];

indexRouter.get("/", indexcontroller.homepage);

indexRouter.get("/new", (req, res) => res.render("form", {}));

indexRouter.post("/new", indexcontroller.postmessage);

indexRouter.get("/message/:id", indexcontroller.getMessage);

module.exports = indexRouter;
