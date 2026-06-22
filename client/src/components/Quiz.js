// Displays quiz questions fetched from backend and tracks local score.
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/quiz/questions');
        setQuestions(response.data);
      } catch (_error) {
        setError('Unable to load quiz questions. Make sure backend is running.');
      }
    };

    loadQuestions();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section>
      <h2>Quiz</h2>
      {questions.length === 0 ? (
        <p>No questions available.</p>
      ) : (
        <ol>
          {questions.map((question) => (
            <li key={question.id} style={{ marginBottom: '1rem' }}>
              <p>{question.question_text}</p>
              <ul>
                <li>A) {question.option_a}</li>
                <li>B) {question.option_b}</li>
                <li>C) {question.option_c}</li>
                <li>D) {question.option_d}</li>
              </ul>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

export default Quiz;
