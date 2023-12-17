const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("See your cart and pay");
});

module.exports = router;