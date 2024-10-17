const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());

const NASA_API_KEY = 'tIgQcz50cVXrvGSa6xbY7ob9u72D1cpim2Esb4pY'; // Replace with your NASA API Key

app.get('/asteroids', async (req, res) => {
  const { start_date, end_date } = req.query;
  try {
    const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed`, {
      params: {
        start_date,
        end_date,
        api_key: NASA_API_KEY,
      },
    });

    const asteroids = Object.values(response.data.near_earth_objects).flat().map((asteroid) => ({
      id: asteroid.id,
      name: asteroid.name,
      close_approach_date: asteroid.close_approach_data[0].close_approach_date,
      diameter: asteroid.estimated_diameter.kilometers.estimated_diameter_max,
    }));

    res.json(asteroids);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch asteroids' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
