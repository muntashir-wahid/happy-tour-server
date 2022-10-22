const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const allPackages = require("./data/tour-package-data.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from Happy Tour server");
});

app.get("/packages", (req, res) => {
  res.send(allPackages);
});

app.get("/package/:id", (req, res) => {
  const id = req.params.id;
  const selectedPackage = allPackages.find((package) => package.id === id);
  res.send(selectedPackage);
});

app.listen(port, () => {
  console.log(`Server is listeing on port ${port}`);
});
