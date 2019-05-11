var express = require("express");
var router = express.Router();

let goods = [
  {
    id: 0,
    title: "Яблоки",
    text: "Вкусные яблоки",
    price: 300,
    img: ""
  },
  {
    id: 1,
    title: "Груши",
    text: "Вкусные груши",
    price: 400,
    img: ""
  }
];

router.get("/", (req, res) => {
  res.send(goods);
});

router.put("/", (req, res) => {
  let gd = req.body;
  gd.id = goods.length;
  goods.push(gd);
  res.send(gd);
});

module.exports = router;
