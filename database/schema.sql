-- Creates SQL Server tables required by the quiz game application.

IF DB_ID('QuizGameDB') IS NULL
BEGIN
    CREATE DATABASE QuizGameDB;
END;
GO

USE QuizGameDB;
GO

-- Stores quiz questions with multiple choice options.
CREATE TABLE Questions (
    id INT IDENTITY(1,1) PRIMARY KEY,
    subject VARCHAR(100) NOT NULL,
    difficulty VARCHAR(50) NOT NULL,
    question_text NVARCHAR(500) NOT NULL,
    option_a NVARCHAR(255) NOT NULL,
    option_b NVARCHAR(255) NOT NULL,
    option_c NVARCHAR(255) NOT NULL,
    option_d NVARCHAR(255) NOT NULL,
    correct_answer CHAR(1) NOT NULL CHECK (correct_answer IN ('A', 'B', 'C', 'D'))
);
GO

-- Stores user profile data.
CREATE TABLE Users (
    id INT IDENTITY(1,1) PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()
);
GO

-- Stores each quiz attempt and score.
CREATE TABLE QuizResults (
    id INT IDENTITY(1,1) PRIMARY KEY,
    user_id INT NULL,
    subject VARCHAR(100) NOT NULL,
    difficulty VARCHAR(50) NOT NULL,
    score INT NOT NULL,
    total_questions INT NOT NULL,
    attempted_at DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    CONSTRAINT FK_QuizResults_Users FOREIGN KEY (user_id) REFERENCES Users(id)
);
GO
