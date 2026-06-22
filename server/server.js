// Express API server entry point for quiz and score routes.
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const quizRoutes = require('./routes/quizRoutes');
const scoreRoutes = require('./routes/scoreRoutes');

const app = express();
const PORT = Number(process.env.PORT || 5000);

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/quiz', quizRoutes);
app.use('/api/scores', scoreRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
