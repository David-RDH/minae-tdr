import sqlite3 from 'sqlite3';

//ouvrir la bd
const db = new sqlite3.Database('./tdr.sqlite');

//creation des tables
// Créer la table "utilisateurs"
db.run(`CREATE TABLE  'Utilisateurs' (
    'idUtilisateurs' INTEGER    PRIMARY KEY AUTOINCREMENT,
    'Email' LINESTRING UNIQUE,
    'Password' LINESTRING,
    'Nom' TEXT (200),
    'Prenom' TEXT
)`,
(err) => {
    if (err) {
      console.log('Table deja creer');
    } else {
      console.log('Table creer');
    }
  });

// Créer la table "tdr"
db.run(`CREATE TABLE 'Tdr' (
    'idTdr' INTEGER PRIMARY KEY AUTOINCREMENT,
    'Nom' TEXT (200),
    'Utilisateurs_id' INTEGER REFERENCES 'Utilisateurs' (idUtilisateurs) 
)`,
(err) => {
    if (err) {
      console.log('Table deja creer');
    } else {
      console.log('Table creer');
    }
  });


// Créer la table "Chapitre"
db.run(`CREATE TABLE 'Chapitre' (
  'idChapitre' INTEGER PRIMARY KEY AUTOINCREMENT,
  'tdr_id' INTEGER REFERENCES 'tdr' (idTdr),
  'Nom' TEXT,
  'Contenu' LONGTEXT
)`, (err) => {
  if (err) {
    console.log('Table déjà créée');
  } else {
    console.log('Table créée');
  }
});

// Créer la table "SousChapitre"
db.run(`CREATE TABLE 'SousChapitre' (
  'idSousChapitre' INTEGER PRIMARY KEY AUTOINCREMENT,
  'Nom' TEXT,
  'Type' TEXT,
  'Valeur' LONGTEXT
)`, (err) => {
  if (err) {
    console.log('Table déjà créée');
  } else {
    console.log('Table créée');
  }
});
      
module.exports = db;