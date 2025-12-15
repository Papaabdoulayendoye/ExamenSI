# ExamenSI — Counter Web App (React + Express + MongoDB)
A minimal full-stack web app for the exam: a counter (countdown) with **increment (+)** and **decrement (-)** persisted in a database.

## Project structure
- `frontend/`: React + TypeScript (Vite)
- `backend/`: Express + TypeScript API (MongoDB + Mongoose)
- `compose.yaml`: Docker Compose stack (MongoDB + API + web)

## Features
- Counter UI with **+ / - / Reset**
- Counter value stored in **MongoDB**

## API
Base URL: `http://localhost:4000`
- `GET /api/health`
- `GET /api/counter` → `{ "value": number }`
- `POST /api/counter/increment` → `{ "value": number }`
- `POST /api/counter/decrement` → `{ "value": number }`
- `POST /api/counter/reset` → `{ "value": number }`

## Build & Run (Docker) — recommended
From the repo root:
- Build and start everything:
  - `docker compose up --build`

Open:
- Frontend: `http://localhost:8080`
- API health: `http://localhost:4000/api/health`

## Build & Run (Local development)
### 1) Start MongoDB (quickest)
From the repo root:
- `docker compose up mongo`

### 2) Backend
1. Create env file:
   - `copy backend\.env.example backend\.env`
2. Install & run:
   - `cd backend`
   - `npm.cmd install`
   - `npm.cmd run dev`

### 3) Frontend
1. Create env file:
   - `copy frontend\.env.example frontend\.env`
2. Install & run:
   - `cd frontend`
   - `npm.cmd install`
   - `npm.cmd run dev`

## Comments
- On some Windows/PowerShell setups, `npm` may be blocked by execution policies. Use `npm.cmd`.
- In Docker, the frontend is served by Nginx and the backend runs as a non-root user.
- MongoDB data is stored in a named Docker volume (`mongo_data`).
