// Handles quiz question retrieval endpoints.
const express = require('express');
const { sql, getPool } = require('../config/database');

const router = express.Router();

router.get('/questions', async (req, res) => {
  const { subject, difficulty } = req.query;

  try {
    const pool = await getPool();
    const request = pool.request();

    let query = 'SELECT * FROM Questions WHERE 1=1';

    if (subject) {
      query += ' AND subject = @subject';
      request.input('subject', sql.VarChar(100), subject);
    }

    if (difficulty) {
      query += ' AND difficulty = @difficulty';
      request.input('difficulty', sql.VarChar(50), difficulty);
    }

    const result = await request.query(query);
    res.json(result.recordset);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch quiz questions.', error: error.message });
  }
});

module.exports = router;
