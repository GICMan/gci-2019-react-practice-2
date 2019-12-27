const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const packageInfo = require("./package.json");

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/info", (req, res) =>
  res.json({
    serverName: packageInfo.name,
    serverVersion: packageInfo.version
  })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
