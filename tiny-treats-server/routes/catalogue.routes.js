const router = require("express").Router();
const Product = require("../models/Product.model");

router.get("/", (req, res, next) => {
  console.log("Ciao!");
  res.send("Tiny Treats Product Catalogue");
});

router.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
