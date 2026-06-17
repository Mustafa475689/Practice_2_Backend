var express = require('express');
var router = express.Router();

// require models
const userModel = require('./users')
const postModel = require('./posts')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/createuser', async function (req, res, next) {
  let createduser = await userModel.create({
    username: "Ali",
    password: "ali123",
    fullname: "Ali Khan",
    email: "ali@gmail.com",
    posts: [],
  });
  res.send(createduser);
});

router.get('/createpost', async function (req, res, next) {
  let createdpost = await postModel.create({
    postText: "Kahaan ja rhy hu",
    user: '6a3276c58cdf0796379c78c3'   // give user id to see post posted by user
  });
  let user = await userModel.findOne({ _id: "6a3276c58cdf0796379c78c3" });
  user.posts.push(createdpost._id);
  await user.save(); //save krne ke liye 
  res.send("done");
});

// Create route to find all users posts
router.get('/alluserpost', async function (req, res, next) {
  let user = await userModel.findOne({ _id: "6a3276c58cdf0796379c78c3" })
    .populate("posts"); /// to see real posts posts data not just id of posts. (populate) helps to see us rea post data

  res.send(user);
});

module.exports = router;
