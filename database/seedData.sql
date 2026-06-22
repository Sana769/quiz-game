-- Seeds initial quiz questions inspired by the original C++ quiz project.

USE QuizGameDB;
GO

INSERT INTO Questions (subject, difficulty, question_text, option_a, option_b, option_c, option_d, correct_answer) VALUES
('Physics', 'Easy', 'What is the SI unit of force?', 'Newton', 'Joule', 'Watt', 'Pascal', 'A'),
('Physics', 'Medium', 'Which law explains action and reaction?', 'First Law', 'Second Law', 'Third Law', 'Law of Gravitation', 'C'),
('Physics', 'Hard', 'What is the speed of light in vacuum (approx)?', '3 x 10^5 m/s', '3 x 10^8 m/s', '1.5 x 10^8 m/s', '9.8 m/s^2', 'B'),
('Chemistry', 'Easy', 'What is the chemical symbol for water?', 'WO', 'H2O', 'HO2', 'OH2', 'B'),
('Chemistry', 'Medium', 'pH value less than 7 indicates:', 'Base', 'Salt', 'Acid', 'Neutral solution', 'C'),
('Chemistry', 'Hard', 'Avogadro number is closest to:', '6.022 x 10^23', '9.11 x 10^-31', '3 x 10^8', '1.602 x 10^-19', 'A'),
('Math', 'Easy', 'What is 12 + 8?', '18', '20', '22', '24', 'B'),
('Math', 'Medium', 'Derivative of x^2 is:', 'x', '2x', 'x^2', '2', 'B'),
('Math', 'Hard', 'Integral of 1/x dx is:', 'x', '1/(x^2)', 'ln|x| + C', 'e^x + C', 'C');
GO
