// Main app component and route configuration.
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import QuizSelection from './components/QuizSelection';
import Quiz from './components/Quiz';
import Results from './components/Results';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '1rem' }}>
      <h1>Quiz Game</h1>
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>
          Select Quiz
        </Link>
        <Link to="/quiz" style={{ marginRight: '1rem' }}>
          Start Quiz
        </Link>
        <Link to="/results">Results</Link>
      </nav>

      <Routes>
        <Route path="/" element={<QuizSelection />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
