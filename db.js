import sqlite3 from 'sqlite3';

//ouvrir la bd
const db = new sqlite3.Database('./tdr.sqlite');

//creation des tables
// Créer la table "utilissateurs"
db.run(`CREATE TABLE Utilisateurs (
    idUtilisateurs INTEGER    PRIMARY KEY AUTOINCREMENT,
    Email          LINESTRING UNIQUE,
    Password       LINESTRING,
    Nom            TEXT (200),
    Prenom         TEXT
)`);

// Créer la table "tdr"
db.run(`CREATE TABLE Tdr (
    idTdr           INTEGER    PRIMARY KEY AUTOINCREMENT,
    Nom             TEXT (200),
    Utilisateurs_id INTEGER    REFERENCES Utilisateurs (idUtilisateurs) 
)`);

// Créer la table "chapitre"
db.run(`CREATE TABLE Chapitre (
    idChapitre INTEGER  PRIMARY KEY AUTOINCREMENT,
    tdr_id     INTEGER  REFERENCES tdr (idTdr),
    Nom        TEXT,
    Contenu    LONGTEXT)');

//Créer la table "souschapitre"
db.run(`CREATE TABLE SousChapitre (
    idSousChapitre INTEGER  PRIMARY KEY AUTOINCREMENT,
    Nom            TEXT,
    Type           TEXT,
    Valeur         LONGTEXT
    )`);
/*  
// Ajouter des données
db.run(`INSERT INTO Utilisateurs (Email, Password) VALUES (?, ?, ?)`, ['rakoto@example.com', '123123']);

//récupérer des données
db.all(`SELECT * FROM Utilisateurs`, (err, rows) => {
    if (err) throw err;
    console.log(rows);
  });

  */