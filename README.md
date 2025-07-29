# Todo API - TP DevOps IPSSI

Ce projet consiste à créer une API REST permettant de gérer des tâches (Todo list). Elle est développée avec Node.js, Dockerisée et lancée via Docker Compose. La gestion du projet est organisée en Kanban via GitHub Projects.

## Objectifs

- Créer une API Node.js avec les routes CRUD
- Dockeriser l’application (Dockerfile et docker-compose.yml)
- Organiser les tâches du projet avec un tableau Kanban GitHub
- Préparer une base pour la CI/CD (cours suivant)

## Fonctionnalités de l’API

L’API permet de :

- Ajouter une tâche
- Lister toutes les tâches
- Voir une tâche par son id
- Modifier une tâche
- Supprimer une tâche

Données manipulées :

```json
{
  "id": "uuid",
  "description": "string",
  "status": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
