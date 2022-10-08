const mongoose = require("mongoose");

const Comment = mongoose.model(
  "Comment",
  new mongoose.Schema(
    {
      message: String,
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
      parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
      children: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Comment",
        },
      ],
      likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Like" }],
    },
    { timestamps: true }
  )
);

module.exports = Comment;
