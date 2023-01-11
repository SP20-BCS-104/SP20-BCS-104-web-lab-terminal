const mongoose = require("mongoose");

const { Schema } = mongoose;

const PostsSchema = new Schema({
  posts: [
    {
      id: { type: String },
      title: { type: String },
      reactions: { type: String },
      userId: { type: String },
    },
  ],
});

module.exports = mongoose.model("posts", PostsSchema);