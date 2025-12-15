# **NDOYE PAPA ABDOULAYE**

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

## Build & Run (Docker)
Depuis la racine du dépôt :
- Build + démarrage de tous les services (mode "prod") :
  - `docker compose up --build`

Accès :
- Frontend : `http://localhost:8080`
- API health : `http://localhost:4000/api/health`

## Développement avec Docker Compose (hot reload)
Objectif : en modifiant le code local, les conteneurs se rechargent automatiquement.

Depuis la racine du dépôt :
- Lancer le mode dev :
  - `docker compose -f compose.dev.yaml up --build`

Accès :
- Frontend (Vite dev server) : `http://localhost:5173`
- API : `http://localhost:4000/api/health`

## Build & Run (Développement local)
### 1) Démarrer MongoDB (le plus simple)
Depuis la racine :
- `docker compose up mongo`

### 2) Backend `https://hub.docker.com/repository/docker/papaabdoulaye/examensi-api/general`
1. Créer le fichier `.env` :
   - `copy backend\.env.example backend\.env`
2. Installer & lancer :
   - `cd backend`
   - `npm install`
   - `npm run dev`

### 3) Frontend `https://hub.docker.com/repository/docker/papaabdoulaye/examensi-web/general`
1. Créer le fichier `.env` :
   - `copy frontend\.env.example frontend\.env`
2. Installer & lancer :
   - `cd frontend`
   - `npm  install`
   - `npm run dev`

## Sécurité (Scout + Docker Hub)
- Un scan Scout a été réalisé sur les images Docker sur le hub docker les lien ci-dessous sont les captures faite a paritr des resultats obtenues puis que le hub docker on est limité a 1 scan pour une images et pour en beneficier plus il faut être en mode PRO PLAN 
  - `https://ibb.co/350TSKg1` (ExamenSI-web / Front)
    - *Le niveau de gravité « moyen » indique une vulnérabilité dont l'impact potentiel est modéré si elle est exploitée.*   
  - `https://ibb.co/JF82sNv2` (ExamenSI-api / Back)
    -  *Avec le niveau de gravité « HIGH 7.5 (	CVE-2025-64756 )» Les pirates disposant d'un accès local ou d'un compte CI pourraient exploiter cette vulnérabilité pour exécuter des commandes arbitraires avec les privilèges de l'utilisateur actuel. Cela pourrait entraîner une compromission totale du système, notamment : - Accès non autorisé à des ressources système sensibles*

## Commentaires
- En Docker : le frontend est servi par Nginx, et le backend tourne en non‑root.
- Les données MongoDB sont stockées dans un volume Docker nommé (`mongo_data`).
