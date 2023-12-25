const express = require("express");
const expressHandlebars = require("express-handlebars").engine;
const app = express();


app.engine(
  "handlebars",
  expressHandlebars({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));
const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.render("home"));

app.get("/aboutUs", (req, res) => {
  res.render("aboutUs");
});

// Xử lý 404
app.use((req, res, next) => {
  res.status(404).render("404");
});
//xử lý 500
app.use((req, res, next) => {
  res.status(500).render("500");
});

app.listen(port, () =>
  console.log(
    `server started on port ${port}; ` + "press Ctrl-C to terminate....."
  )
);