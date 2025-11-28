const express = require('express');
const Project = require('../models/Project');
const { auth } = require('../middleware/auth');

const router = express.Router();

// All routes require admin auth
router.use(auth('admin'));

// List
router.get('/', async (req, res) => {
  const items = await Project.find().sort({ createdAt: -1 }).lean();
  res.json(items);
});

// Create
router.post('/', async (req, res) => {
  const { title, tech = [], link, featured = false } = req.body || {};
  if (!title) return res.status(400).json({ error: 'Title is required' });
  const doc = await Project.create({ title, tech, link, featured });
  res.status(201).json(doc);
});

// Update
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body || {};
  const doc = await Project.findByIdAndUpdate(id, body, { new: true });
  if (!doc) return res.status(404).json({ error: 'Not found' });
  res.json(doc);
});

// Delete
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const r = await Project.findByIdAndDelete(id);
  if (!r) return res.status(404).json({ error: 'Not found' });
  res.json({ success: true });
});

module.exports = router;
