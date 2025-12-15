# Rapport de sécurité — Trivy
Date du scan : 15 décembre 2025

## Images scannées
- `papaabdoulaye/examensi-api:latest`
- `papaabdoulaye/examensi-web:latest`

## Résumé
- `examensi-api`: 0 vulnérabilité détectée (OS Alpine + dépendances Node scannées).
- `examensi-web`: 1 vulnérabilité **MEDIUM** détectée côté OS (Alpine) : `CVE-2025-62408` (package `c-ares`).

## Détails
Les rapports complets sont versionnés dans `reports/` :
- `reports/trivy-examensi-api.txt` (+ version JSON : `reports/trivy-examensi-api.json`)
- `reports/trivy-examensi-web.txt` (+ version JSON : `reports/trivy-examensi-web.json`)

## Commentaires / Remédiation
- La vulnérabilité `CVE-2025-62408` est liée au package Alpine `c-ares`.
- Trivy indique une version corrigée disponible (`1.34.6-r0`). Pour supprimer l’alerte :
  - Rebuilder l’image `examensi-web` après mise à jour de l’image de base (ex: `nginx:alpine`) vers une version qui inclut le correctif.
  - Alternative (moins recommandée) : faire un `apk upgrade` dans l’image runtime, mais cela peut réduire la reproductibilité du build.

## Commandes utilisées (via Docker)
Les commandes suivantes ont été utilisées (Trivy exécuté via l’image Docker officielle) :
- Format table :
  - `docker run --rm -v "${PWD}:/work" -w /work aquasec/trivy:latest image --timeout 10m --format table -o reports/trivy-examensi-api.txt papaabdoulaye/examensi-api:latest`
  - `docker run --rm -v "${PWD}:/work" -w /work aquasec/trivy:latest image --timeout 10m --format table -o reports/trivy-examensi-web.txt papaabdoulaye/examensi-web:latest`
- Format JSON :
  - `docker run --rm -v "${PWD}:/work" -w /work aquasec/trivy:latest image --timeout 10m --format json -o reports/trivy-examensi-api.json papaabdoulaye/examensi-api:latest`
  - `docker run --rm -v "${PWD}:/work" -w /work aquasec/trivy:latest image --timeout 10m --format json -o reports/trivy-examensi-web.json papaabdoulaye/examensi-web:latest`
