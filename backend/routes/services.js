const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// GET all services
router.get('/', async (req, res) => {
  const services = await Service.find();
  res.json(services);
});

// POST new service
router.post('/', async (req, res) => {
  const newService = new Service(req.body);
  await newService.save();
  res.json(newService);
});

module.exports = router;
