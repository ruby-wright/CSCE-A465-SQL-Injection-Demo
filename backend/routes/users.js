const express = require('express');
const router = express.Router();
const pool = require('../db');

// vulnerable login - to be used for sqlInjection possibly?
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const query = `
    SELECT * FROM users
    WHERE username = '${username}'
    AND password = '${password}'
  `;

  try {
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// secure login
router.post('/secure-login', async (req, res) => {
  const { username, password } = req.body;

  const query = `
    SELECT * FROM users
    WHERE username = $1
    AND password = $2
  `;

  try {
    const result = await pool.query(query, [username, password]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

