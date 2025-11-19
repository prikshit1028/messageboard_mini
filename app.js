const express = require("express");
const indexRouter = require("./routes/indexRoute");
const app = express();

const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.urlencoded({ extended: true }));

app.use(express.static(assetsPath));
app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, function (err) {
  if (err) {
    console.error(err);
  }
  console.log("app running on port 8080");
});
