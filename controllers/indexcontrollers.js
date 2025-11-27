const dbcontroller = require("../db/queries");

exports.homepage = async function (req, res) {
  let result = await dbcontroller.getMessages();
  res.render("index", { messages_all: result });
};

exports.postmessage = async function (req, res) {
  let name = req.body.author_name;
  let msg = req.body.message_text;
  await dbcontroller.postmessage(name, msg);
  res.redirect("/");
};

exports.getMessage = async function (req, res) {
  let idof = req.params.id;
  let storeresult = await dbcontroller.getmsg(idof);
  res.render("msg", { msge: storeresult });
};
