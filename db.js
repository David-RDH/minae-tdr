const sqlite3 = require('sqlite3').verbose();


// Créer une instance de base de données SQLite
const db = new sqlite3.Database('../../../../database/tdr.sqlite');
//creation des tables
// Créer la table "utilisateurs"
db.run(`CREATE TABLE  'Utilisateurs' (
    'id' INTEGER    PRIMARY KEY AUTOINCREMENT,
    'email' LINESTRING UNIQUE,
    'password' LINESTRING,
    'nom' TEXT (200),
    'prenom' TEXT
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
    'id' INTEGER PRIMARY KEY AUTOINCREMENT,
    'nom' TEXT (200),
    'Utilisateurs_id' INTEGER REFERENCES 'Utilisateurs' (id) 
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
  'id' INTEGER PRIMARY KEY AUTOINCREMENT,
  'tdr_id' INTEGER REFERENCES 'tdr' (id),
  'nom' TEXT,
  'contenu' LONGTEXT
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
  'Chapitres_id' INTEGER REFERENCES 'Chapitres' (id),
  'nom' TEXT,
  'type' TEXT,
  'contenu' LONGTEXT
)`, (err) => {
  if (err) {
    console.log('Table déjà créée');
  } else {
    console.log('Table créée');
  }
});
      
module.exports = db;