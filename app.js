const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

let items = [];

//when user access home route, sends the user "hello"
app.get("/", function (req, res) {
  const today = new Date();
  const currentDay = today.getDay();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  const day = today.toLocaleDateString("en-US", options);

  res.render("list", { day: day, newListItems: items });
});

app.post("/", function (req, res) {
  item = req.body.newItem;

  items.push(item);

  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
