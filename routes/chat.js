var express = require("express");
var router = express.Router();

let messages = [
  {
    id: 0,
    from: "vovanostm",
    text: "Привет, Егор"
  },
  {
    id: 1,
    from: "mregor_787",
    text: "Здравствуйте, ВА"
  }
];

router.get("/", (req, res) => {
  res.send(messages);
});

router.put("/", (req, res) => {
  let nms = req.body;
  nms.id = messages.length;
  messages.push(nms);
  res.send(nms);
});

module.exports = router;
