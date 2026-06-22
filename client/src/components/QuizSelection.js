// Lets users choose quiz subject and difficulty.
import React, { useState } from 'react';

function QuizSelection() {
  const [subject, setSubject] = useState('Physics');
  const [difficulty, setDifficulty] = useState('Easy');

  return (
    <section>
      <h2>Choose Your Quiz</h2>
      <label htmlFor="subject">Subject: </label>
      <select id="subject" value={subject} onChange={(e) => setSubject(e.target.value)}>
        <option>Physics</option>
        <option>Chemistry</option>
        <option>Math</option>
      </select>

      <br />
      <br />

      <label htmlFor="difficulty">Difficulty: </label>
      <select id="difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>

      <p style={{ marginTop: '1rem' }}>
        Selected: <strong>{subject}</strong> - <strong>{difficulty}</strong>
      </p>
    </section>
  );
}

export default QuizSelection;
