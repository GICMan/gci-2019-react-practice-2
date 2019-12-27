const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const packageInfo = require("./package.json");

const { categories } = require("./data/categories.json");
const { products } = require("./data/products.json");

const productsFull = products.map(x => {
  categoryName = categories.find(c => x.categoryId === c.id).categoryName;
  return {
    ...x,
    categoryName
  };
});

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/info", (req, res) =>
  res.json({
    serverName: packageInfo.name,
    serverVersion: packageInfo.version
  })
);

app.get("/products/all", (req, res) => {
  res.json(productsFull);
});

app.get("/products/:id", (req, res) => {
  product = productsFull.find(p => req.params.id == p.id);
  res.json(product);
});

app.get("/category/:id", (req, res) => {
  specificProducts = productsFull.filter(p => p.categoryId === req.params.id);
  res.json(specificProducts);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
