module.exports = (app) => {
  const controller = require("../controllers/user.controller");
  const router = require("express").Router();
  router.post("/", controller.createUser);
  app.use("/api/users", router);
};
