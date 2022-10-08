/* module.exports = function (app) {
  app.use((req, res, next) => {
    res.header(
      "Access-Controll-Allow-Headers",
      "Authorization, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/posts");
}; */

module.exports = (app) => {
  const controller = require("../controllers/comment.controller");
};
