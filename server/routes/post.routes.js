module.exports = (app) => {
  const controller = require("../controllers/post.controller");
  const router = require("express").Router();
  router.get("/", controller.getAllPosts);
  router.post("/", controller.createPost);
  router.get("/:id", controller.getPostById);
  app.use("/api/posts", router);
};
