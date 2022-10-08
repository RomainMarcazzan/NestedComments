const mongoose = require("mongoose");
const db = {};
db.mongoose = mongoose;
db.user = require("./user.model");
db.post = require("./post.model");
db.comment = require("./comment.model");
db.like = require("./like.model");

module.exports = db;
