--
-- Fichier généré par SQLiteStudio v3.4.3 sur jeu. mars 23 14:20:02 2023
--
-- Encodage texte utilisé : System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table : Chapitre
DROP TABLE IF EXISTS Chapitre;
CREATE TABLE IF NOT EXISTS Chapitre (idChapitre INTEGER PRIMARY KEY AUTOINCREMENT, tdr_id INTEGER REFERENCES tdr (idTdr), Nom TEXT, Contenu LONGTEXT);

-- Table : SousChapitre
DROP TABLE IF EXISTS SousChapitre;
CREATE TABLE IF NOT EXISTS SousChapitre (idSousChapitre INTEGER PRIMARY KEY AUTOINCREMENT, Nom TEXT, Type TEXT, Valeur LONGTEXT);

-- Table : Tdr
DROP TABLE IF EXISTS Tdr;
CREATE TABLE IF NOT EXISTS Tdr (idTdr INTEGER PRIMARY KEY AUTOINCREMENT, Nom TEXT (200), Utilisateurs_id INTEGER REFERENCES Utilisateurs (idUtilisateurs));

-- Table : Utilisateurs
DROP TABLE IF EXISTS Utilisateurs;
CREATE TABLE IF NOT EXISTS Utilisateurs (idUtilisateurs INTEGER PRIMARY KEY AUTOINCREMENT, Email LINESTRING UNIQUE, Password LINESTRING, Nom TEXT (200), Prenom TEXT);

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
