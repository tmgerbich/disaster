const express = require('express');
const router = express.Router();
const { User, Post, Comment } = require('../models');

// Get user profile
router.get('/get/userprofilefromdb', async (req, res) => {
  const username = req.query.username;
  try {
    const user = await User.findOne({ where: { username } });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all posts by a user
router.get('/get/userposts', async (req, res) => {
  const userId = req.query.user_id;
  try {
    const posts = await Post.findAll({ where: { userId } });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Save user profile to DB
router.post('/posts/userprofiletodb', async (req, res) => {
  const { username } = req.body.profile;
  try {
    const [user, created] = await User.findOrCreate({
      where: { username },
      defaults: { username, dateCreated: new Date() }
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
