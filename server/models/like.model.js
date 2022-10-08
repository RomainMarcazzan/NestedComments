const mongoose = require("mongoose");

const Like = mongoose.model(
  "Like",
  new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    comment: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
  })
);

module.exports = Like;
