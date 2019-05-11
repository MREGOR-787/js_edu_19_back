const news = require("./news");
const store = require("./store");
const chat = require("./chat");

function route(app) {
  app.use("/news", news);
  app.use("/store", store);
  app.use("/chat", chat);
}

module.exports = route;
