const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  postText: {
    type: String,
    required: true,
  },

  likes: [
    {
      type: Array,
      default: [],
    //   ref: "User",
    },
  ],

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    // reuired: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", postSchema);