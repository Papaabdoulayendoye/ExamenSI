# Counter Web App (React + Express + MongoDB)
This repository contains:
- `frontend/`: React + TypeScript (Vite)
- `backend/`: Express + TypeScript API (MongoDB + Mongoose)
- `compose.yaml`: Docker Compose stack (MongoDB + API + web)

## Features
- Counter UI with **+ / - / Reset**
- Counter persisted in **MongoDB**
- API endpoints:
  - `GET /api/counter`
  - `POST /api/counter/increment`
  - `POST /api/counter/decrement`
  - `POST /api/counter/reset`

## Run with Docker (recommended)
From the repo root:
- Build and start:
  - `docker compose up --build`

Then open:
- Frontend: `http://localhost:8080`
- API health: `http://localhost:4000/api/health`

## Run locally (without Docker)
### 1) Backend
1. Copy env:
   - `copy backend\.env.example backend\.env`
2. Install and run:
   - `cd backend`
   - `npm.cmd install`
   - `npm.cmd run dev`

### 2) Frontend
1. Copy env:
   - `copy frontend\.env.example frontend\.env`
2. Install and run:
   - `cd frontend`
   - `npm.cmd install`
   - `npm.cmd run dev`

Notes:
- If PowerShell blocks `npm` due to execution policies, use `npm.cmd` (as shown above).
- For local dev you still need a MongoDB instance. The quickest way is:
  - `docker compose up mongo`
