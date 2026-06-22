// Handles score submission and leaderboard endpoints.
const express = require('express');
const { sql, getPool } = require('../config/database');

const router = express.Router();

router.post('/', async (req, res) => {
  const { userId, subject, difficulty, score, totalQuestions } = req.body;

  try {
    const pool = await getPool();
    await pool
      .request()
      .input('userId', sql.Int, userId)
      .input('subject', sql.VarChar(100), subject)
      .input('difficulty', sql.VarChar(50), difficulty)
      .input('score', sql.Int, score)
      .input('totalQuestions', sql.Int, totalQuestions)
      .query(
        `INSERT INTO QuizResults (user_id, subject, difficulty, score, total_questions)
         VALUES (@userId, @subject, @difficulty, @score, @totalQuestions)`
      );

    res.status(201).json({ message: 'Score saved successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save score.', error: error.message });
  }
});

router.get('/leaderboard', async (_req, res) => {
  try {
    const pool = await getPool();
    const result = await pool.request().query(
      `SELECT TOP 10 qr.id, u.username, qr.subject, qr.difficulty, qr.score, qr.total_questions, qr.attempted_at
       FROM QuizResults qr
       LEFT JOIN Users u ON qr.user_id = u.id
       ORDER BY qr.score DESC, qr.attempted_at DESC`
    );

    res.json(result.recordset);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch leaderboard.', error: error.message });
  }
});

module.exports = router;
