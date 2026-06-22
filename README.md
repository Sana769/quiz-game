# Quiz Game (React + Node.js + SQL Server)

This repository contains a complete full-stack quiz game starter structure with:
- **Frontend:** React
- **Backend:** Node.js + Express
- **Database:** Microsoft SQL Server

## Project Structure

```text
quiz-game/
├── client/
├── server/
└── database/
```

## Prerequisites

- Node.js 18+
- npm 9+
- SQL Server (LocalDB, SQL Server Express, or full SQL Server)
- Visual Studio 2022 (with Node.js workload) or Visual Studio Code

## 1) Clone and Open in Visual Studio

1. Open **Visual Studio 2022**.
2. Select **File > Open > Folder...**
3. Choose this repository folder.

## 2) Database Setup (SQL Server)

1. Open SQL Server Management Studio (SSMS) or Azure Data Studio.
2. Create a database named `QuizGameDB`.
3. Run `/database/schema.sql`.
4. Run `/database/seedData.sql`.

## 3) Backend Setup (`/server`)

1. Open terminal in `/server`.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and update values:
   ```bash
   copy .env.example .env
   ```
4. Start backend server:
   ```bash
   npm start
   ```

Backend runs at `http://localhost:5000` by default.

## 4) Frontend Setup (`/client`)

1. Open another terminal in `/client`.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start frontend app:
   ```bash
   npm start
   ```

Frontend runs at `http://localhost:3000` by default.

## API Endpoints

- `GET /api/quiz/questions?subject=Physics&difficulty=Easy`
- `POST /api/scores`
- `GET /api/scores/leaderboard`

## Notes

- The backend expects SQL Server credentials in `/server/.env`.
- Seed data includes Physics, Chemistry, and Math questions across Easy, Medium, and Hard levels.
