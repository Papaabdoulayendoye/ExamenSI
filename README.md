# ExamenSI — Application Compteur (React + Express + MongoDB)
Application full‑stack minimale pour l’examen : un **compteur / compte à rebours** avec **incrément (+)** et **décrément (-)**, dont la valeur est **persistée en base de données**.

## Structure du projet
- `frontend/` : React + TypeScript (Vite)
- `backend/` : API Express + TypeScript (MongoDB + Mongoose)
- `compose.yaml` : stack Docker Compose (MongoDB + API + web)

## Fonctionnalités
- UI compteur avec **+ / - / Reset**
- Valeur persistée dans **MongoDB**

## API
Base URL : `http://localhost:4000`
- `GET /api/health`
- `GET /api/counter` → `{ "value": number }`
- `POST /api/counter/increment` → `{ "value": number }`
- `POST /api/counter/decrement` → `{ "value": number }`
- `POST /api/counter/reset` → `{ "value": number }`

## Build & Run (Docker) — recommandé
Depuis la racine du dépôt :
- Build + démarrage de tous les services (mode "prod") :
  - `docker compose up --build`

Accès :
- Frontend : `http://localhost:8080`
- API health : `http://localhost:4000/api/health`

## Développement avec Docker Compose (hot reload)
Objectif : en modifiant le code local, les conteneurs se rechargent automatiquement.

Depuis la racine du dépôt :
- Lancer le mode dev (Vite + ts-node-dev + volumes) :
  - `docker compose -f compose.dev.yaml up --build`

Accès :
- Frontend (Vite dev server) : `http://localhost:5173`
- API : `http://localhost:4000/api/health`

## Build & Run (Développement local)
### 1) Démarrer MongoDB (le plus simple)
Depuis la racine :
- `docker compose up mongo`

### 2) Backend
1. Créer le fichier `.env` :
   - `copy backend\.env.example backend\.env`
2. Installer & lancer :
   - `cd backend`
   - `npm.cmd install`
   - `npm.cmd run dev`

### 3) Frontend
1. Créer le fichier `.env` :
   - `copy frontend\.env.example frontend\.env`
2. Installer & lancer :
   - `cd frontend`
   - `npm.cmd install`
   - `npm.cmd run dev`

## Sécurité (Trivy)
- Un scan Trivy a été réalisé sur les images Docker et les rapports sont dans `reports/`.
- Voir le fichier `SECURITY_REPORT.md`.

## Commentaires
- Sur Windows/PowerShell, `npm` peut être bloqué (ExecutionPolicy). Utiliser `npm.cmd`.
- En Docker : le frontend est servi par Nginx, et le backend tourne en non‑root.
- Les données MongoDB sont stockées dans un volume Docker nommé (`mongo_data`).
