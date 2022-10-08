const db = require("../models");
const { user: User } = db;

exports.createUser = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty" });
  }
  const user = new User({
    name: req.body.name,
  });

  user
    .save(user)
    .then(() => {
      res.status(200).send({ message: "User was created" });
    })
    .catch((err) => {
      res
        .status(500)
        .send({
          message: err.message || "Some error occured while creating the user",
        });
    });
};
