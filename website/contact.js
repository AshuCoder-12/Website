// contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

router.post('/submit', async (req, res) => {
  try {
    // Save contact form data to MongoDB
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;