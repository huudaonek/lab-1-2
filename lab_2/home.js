const express = require("express");
const expressHandlebars = require("express-handlebars").engine;
const app = express();
const product = [{ name: "Cool tree", image: "/img/logo1.png", price: "$100" }];


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


app.get("/product", (req, res) => {
  res.render("product", { products: product });
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