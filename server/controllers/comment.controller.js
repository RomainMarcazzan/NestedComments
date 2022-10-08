const db = require("../models/index");
const { comment: Comment } = db;

exports.createComment = (req, res) => {
  if (!req.body.message || !req.body.message) {
    res.status(400).send({ message: "Content can not be empty" });
  }

  const comment = new Comment({
    message: req.body.message,
  });

  comment
    .save(comment)
    .then(() => res.status(200).send({ message: "Comment was created" }))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the comment",
      });
    });
};
