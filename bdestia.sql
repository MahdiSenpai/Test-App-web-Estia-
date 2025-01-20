-- Création de la base de données
CREATE DATABASE gestion_etudiants;
USE gestion_etudiants;

-- Table Matière
CREATE TABLE Matiere (
    matiere_code VARCHAR(50) PRIMARY KEY,
    matiere_libelle VARCHAR(255),
    matiere_libelle_suite VARCHAR(255),
    matiere_type_d_enseignement VARCHAR(255)
);

-- Table Cohorte
CREATE TABLE Cohorte (
    id_cohorte VARCHAR(50) PRIMARY KEY,
    type_formation_cohorte VARCHAR(255),
    formation_libelle_cohorte VARCHAR(255),
    formation_libelle_suite_cohorte VARCHAR(255)
);

-- Table Promo
CREATE TABLE Promo (
    id_promo VARCHAR(50) PRIMARY KEY,
    annee_promo YEAR
);

-- Table Groupe
CREATE TABLE Groupe (
    groupe_id VARCHAR(50) PRIMARY KEY,
    groupe_nom VARCHAR(255)
);

-- Table Projet
CREATE TABLE Projet (
    projet_id VARCHAR(50) PRIMARY KEY,
    description TEXT,
    client VARCHAR(255),
    lien_connection_etudiant VARCHAR(255),
    lien_github VARCHAR(255)
);

-- Table Equipe
CREATE TABLE Equipe (
    equipe_id VARCHAR(50) PRIMARY KEY,
    equipe_nom VARCHAR(255)
);

-- Table Etudiant
CREATE TABLE Etudiant (
    id VARCHAR(50) PRIMARY KEY,
    genre VARCHAR(50),
    nom VARCHAR(255),
    prenom VARCHAR(255),
    email VARCHAR(255),
    login_sid VARCHAR(255),
    taux_absenteisme FLOAT,
    produit_selectionne_groupe VARCHAR(255),
    numero_TD INT,
    formation VARCHAR(255),
    annee_formation YEAR,
    equipe_id INT,
    FOREIGN KEY (equipe_id) REFERENCES Equipe(equipe_id)
);

-- Relations entre les tables

-- Une promo inclut plusieurs cohortes
ALTER TABLE Cohorte ADD COLUMN id_promo VARCHAR(50);
ALTER TABLE Cohorte ADD FOREIGN KEY (id_promo) REFERENCES Promo(id_promo);

-- Une cohorte est composée de plusieurs groupes
ALTER TABLE Groupe ADD COLUMN id_cohorte VARCHAR(50);
ALTER TABLE Groupe ADD FOREIGN KEY (id_cohorte) REFERENCES Cohorte(id_cohorte);

-- Une cohorte propose plusieurs matières
ALTER TABLE Cohorte ADD COLUMN matiere_code VARCHAR(50);
ALTER TABLE Cohorte ADD FOREIGN KEY (matiere_code) REFERENCES Matiere(matiere_code);

-- Un groupe réalise plusieurs projets
ALTER TABLE Projet ADD COLUMN groupe_id VARCHAR(50);
ALTER TABLE Projet ADD FOREIGN KEY (groupe_id) REFERENCES Groupe(groupe_id);

-- Une équipe peut appartenir à un groupe
ALTER TABLE Equipe ADD COLUMN groupe_id VARCHAR(50);
ALTER TABLE Equipe ADD FOREIGN KEY (groupe_id) REFERENCES Groupe(groupe_id);
