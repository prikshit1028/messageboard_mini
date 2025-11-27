const dbcontroller = require("../db/queries");
const { body, validationResult, matchedData } = require("express-validator");

const validation = [
  body("author_name")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Name cannot be empty"),
  body("message_text")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Message cannot be empty"),
];

exports.homepage = async function (req, res) {
  let result = await dbcontroller.getMessages();
  res.render("index", { messages_all: result });
};

exports.postmessage = [
  validation,
  async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("form", { erro: errors.array() });
    }
    const { author_name, message_text } = matchedData(req);
    await dbcontroller.postmessage(author_name, message_text);
    res.redirect("/");
  },
];

exports.getMessage = async function (req, res) {
  let idof = req.params.id;
  let storeresult = await dbcontroller.getmsg(idof);
  res.render("msg", { msge: storeresult });
};
