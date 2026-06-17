const mongoose = require("mongoose");
// const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/project");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  
  fullname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  dp: {
    type: String, // profile picture URL/path
    // default: "default.png",
  },

  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  }],
});

// Passport Local Mongoose plugin
// userSchema.plugin(plm);

// user model 
module.exports = mongoose.model("User", userSchema);