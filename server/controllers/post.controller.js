const db = require("../models");
const { post: Post } = db;

exports.getAllPosts = (req, res) => {
  Post.find({})
    .sort({ createdAt: "descending" })
    .then((post) => {
      res.status(200).send(post);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

exports.getPostById = (req, res) => {
  id = req.params.id;
  Post.findById(id)
    .then((post) => {
      if (!post) {
        res.status(404).send({ message: "not found post with id " + id });
      } else {
        res.status(200).send({
          title: post.title,
          body: post.body,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.createPost = (req, res) => {
  if (!req.body.title || !req.body.body) {
    res.status(400).send({ message: "Content can not be empty" });
  }
  const post = new Post({
    title: req.body.title,
    body: req.body.body,
  });

  post
    .save(post)
    .then(() => res.status(200).send({ message: "Post was created" }))
    .catch((err) =>
      res.status(500).send({
        message: err.message || "Some error occured while creating the post",
      })
    );
};
