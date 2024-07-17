const express = require('express');
const router = express.Router();
const { Comment } = require('../models');

// Create new comment
router.post('/post/commenttodb', async (req, res) => {
  const { comment, user_id, username, post_id } = req.body;
  try {
    const newComment = await Comment.create({
      comment, userId: user_id, author: username, postId: post_id, dateCreated: new Date()
    });
    res.json(newComment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update comment
router.put('/put/commenttodb', async (req, res) => {
  const { comment, user_id, post_id, username, cid } = req.body;
  try {
    const updatedComment = await Comment.update(
      { comment, userId: user_id, author: username, postId: post_id, dateCreated: new Date() },
      { where: { cid } }
    );
    res.json(updatedComment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete comment
router.delete('/delete/comment', async (req, res) => {
  const commentId = req.body.comment_id;
  try {
    await Comment.destroy({ where: { cid: commentId } });
    res.json({ message: 'Comment deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all comments for a post
router.get('/get/allpostcomments', async (req, res) => {
  const postId = req.query.post_id;
  try {
    const comments = await Comment.findAll({ where: { postId } });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
