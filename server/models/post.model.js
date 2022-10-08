const mongoose = require("mongoose");

const Post = mongoose.model(
  "Post",
  new mongoose.Schema(
    {
      title: String,
      body: String,
      comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    },
    { timestamps: true }
  )
);
module.exports = Post;
