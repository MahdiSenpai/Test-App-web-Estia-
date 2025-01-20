# Classroom Clerk

Classroom Clerk à pour but de faciliter la création d'équipe projets dans les matières informatiques enseignées à l'ESTIA.

![Logo Classroo Clerk](https://github.com/user-attachments/assets/ce21b84c-9dd5-46de-b450-945122221d2c)


## Table des matières

1. [Description](#description)
2. [Fonctionnalités](#fonctionnalités)
3. [Prérequis](#prérequis)
4. [Installation](#installation)
5. [Licences](#licences)
6. [Auteurs](#auteurs)

## Description

Afin d’améliorer un processus long, sujet à erreur, un enseignant en informatique à l'ESTIA souhaite disposer d‘un portail web qui dans un premier temps permettra d'importer la liste de ses étudiants, de créer des équipes projets les plus équilibrées possible et que les étudiants puissent accéder à leur équipe en s’enregistrant avec leur compte Microsoft ESTIA et leur compte GitHub.
Dans un second temps, il souhaite pouvoir suivre la progression des différents projets et récupérer certaines informations relatives à chaque étudiant (nombre de commits effectués, nommage des commits, …) afin qu’il puisse évaluer les étudiants sur leur projet. 

Cet outil appelé Classroom Clerk permettrait donc de récupérer automatiquement toutes ces informations et de diminuer grandement le risque d’erreur et de simplifier le processus déjà existant. 

## Fonctionnalités

**-Gestion des équipes :** Création, modification et suppression des équipes projets. 

**-Visualisation des équipes projets :** Affichage du nom des différentes équipes en fonction des années scolaires, des formations et des matières. 

**-Évaluation des étudiants :** Donner une note à un étudiant selon certains critères (qualité des commits, nombre des commits ,..) la note peut être modifier par les profs. 

**-Visualisation de la composition d’une équipe projet :** Un étudiant pourra voir les différentes personnes affectées à la même équipe projet que lui. 

**- Visualisation de la contribution d’un étudiant dans son projet :** Accès aux différentes informations liées à son projet (la date de son dernier commit, le contenu de son dernier commit, …). 

**-Visualisation de l’avancement d’un étudiant de son projet :** Accès à un tableau des tâches commun à tous les étudiants d’une même équipe. 

**-Liaison compte GitHub et Microsoft :** Lors de la première connexion, lier le compte Microsoft ESTIA et GitHub de l’étudiant afin de pouvoir créer des dépôts GitHub. 

**-Choix critères création équipes projets :** Choix de l’importance des critères suivants : taux d’absentéisme, moyenne de l’étudiant, deux filles minimums par équipe lors de création des équipes. 

**-Exportation des équipes générées :** Exportation de la liste des différentes équipes au format csv ou xlsx. 

**-Génération équipe automatique sur GitHub :** Après la validation de la création des équipes, cela créé le dépôt GitHub avec le nom de la matière renseignée et le nom de l’équipe, sur ce dépôt et cela affecte les étudiants en envoyant des mails afin qu’ils rejoignent l’équipe GitHub. 

## Prérequis

Liste des outils et bibliothèques nécessaires pour exécuter ce projet.

- [Deno](https://deno.com) (version 2.1.5)

## Installation

Pour installer ce projet localement, suivez les étapes ci-dessous.

### 1. Cloner le dépôt

  git clone https://github.com/Estia-1a/classroom-clerk.git

### 2. Deziper le dossier téléchargé

### 3. Lancer l'application depuis le localhost

## Licences
Ce projet est sous la licence MIT - consultez le fichier LICENSE pour plus de détails.

## Auteurs

Dirchaoui El Mahdi - Développeur principal
Juliard-Varailhon de la filoli Timeo - Développeur principal
Sallenave Xan - Développeur principal
Vernis Gabriel - Développeur principal
