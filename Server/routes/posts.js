const express = require('express');
const router = express.Router();
const { Post, Comment } = require('../models');

// Get all posts
router.get('/get/allposts', async (req, res) => {
  try {
    const posts = await Post.findAll({ order: [['dateCreated', 'DESC']] });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single post
router.get('/get/post', async (req, res) => {
  const postId = req.query.post_id;
  try {
    const post = await Post.findByPk(postId);
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// // Create new post
// router.post('/post/posttodb', async (req, res) => {
//   const { body, uid, username } = req.body;
//   try {
//     const post = await Post.create({
//       body, userId: uid, author: username, dateCreated: new Date()
//     });
//     res.json(post);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// Create new post
router.post('/post/posttodb', async (req, res) => {
    const { userId, body, author, dateCreated, likeUserIds, likes } = req.body;
    console.log(req.body);
    console.log(userId);
    try {
      const post = await Post.create({
        body,
        userId,
        author,
        dateCreated,
        likeUserIds,
        likes
      });
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

// Update post
router.put('/put/post', async (req, res) => {
  const { body, uid, pid, username } = req.body;
  try {
    const post = await Post.update(
      { body, userId: uid, author: username, dateCreated: new Date() },
      { where: { pid } }
    );
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete post comments
router.delete('/delete/postcomments', async (req, res) => {
  const postId = req.body.post_id;
  try {
    await Comment.destroy({ where: { postId } });
    res.json({ message: 'Comments deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete post
router.delete('/delete/post', async (req, res) => {
  const postId = req.body.post_id;
  try {
    await Post.destroy({ where: { pid: postId } });
    res.json({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Like post
router.put('/put/likes', async (req, res) => {
  const { username, post_id } = req.body;
  try {
    const post = await Post.findByPk(post_id);
    if (post) {
      if (!post.likeUserIds.includes(username)) {
        post.likeUserIds.push(username);
        post.likes += 1;
        await post.save();
      }
      res.json(post);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
