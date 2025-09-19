const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
  const newContact = new Contact(req.body);
  await newContact.save();
  res.json({ message: 'Contact submitted successfully' });
});

router.get('/', async (req, res) => {
  const contacts = await Contact.find().sort({ date: -1 });
  res.json(contacts);
});

module.exports = router;
