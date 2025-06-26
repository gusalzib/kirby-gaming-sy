const express = require('express');
const router = express.Router();
const Member = require('../models/Member');

// Create new member
router.post('/', async (req, res) => {
  try {
    const member = new Member(req.body);
    await member.save();
    res.status(201).json(member);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Add a visit to a member
router.post('/:id/visit', async (req, res) => {
  try {
    const { activities } = req.body;
    const member = await Member.findById(req.params.id);
    member.visitHistory.push({ activities });
    await member.save();
    res.json(member);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all members (or single member)
router.get('/', async (req, res) => {
  const members = await Member.find();
  res.json(members);
});

router.get('/:id', async (req, res) => {
  const member = await Member.findById(req.params.id);
  res.json(member);
});

module.exports = router;
