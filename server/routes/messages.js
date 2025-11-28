const express = require('express');
const Message = require('../models/Message');
const { auth } = require('../middleware/auth');

const router = express.Router();

// All routes require admin auth
router.use(auth('admin'));

// List messages
router.get('/', async (req, res) => {
  const items = await Message.find().sort({ createdAt: -1 }).lean();
  res.json(items);
});

// Delete message
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const r = await Message.findByIdAndDelete(id);
  if (!r) return res.status(404).json({ error: 'Not found' });
  res.json({ success: true });
});

module.exports = router;
