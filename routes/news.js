var express = require("express");
var router = express.Router();

let news = [
  {
    id: 0,
    title: "Сервер",
    text: "Ура, сложный сервер заработал",
    img: ""
  },
  {
    id: 1,
    title: "Страшно",
    text: "Много кода",
    img: ""
  }
];

router.get("/", (req, res) => {
  res.send(news);
});

router.put("/", (req, res) => {
  let nw = req.body;
  nw.id = news.length;
  news.push(nw);
  res.send(nw);
});

module.exports = router;
