const router = require('express').Router();
const { Planet } = require('../models');

// Get all planets
router.get('/planets', async (req, res) => {
  try {
    const planets = await Planet.find({});

    res.json(planets);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch planets' });
  }
});

// Create a planet
router.post('/planet', async (req, res) => {
  // Use the Planet model to create a planet with the req.body properties - name, picture, description
  const planet = await Planet.create(req.body);
  // Send the new planet object back as the response
  res.json(planet);
  // Test the route in Insomnia
});

// Get planet by name
// Create a get route that takes a planet name as a url parameter - :some_name
router.get('/planet/:name', async (req, res) => {
  // Use the model .findOne() and pass in our filter object to find a planet by some name
  const planet = await Planet.findOne({
    name: {
      $regex: req.params.name,
      $options: 'i'
    }
  });

  if (planet) return res.json(planet);

  res.json({
    message: 'Planet not found.'
  });
});

// Export our router object
module.exports = router;