const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Chapitre = sequelize.define('Chapitre', {
  idChapitre: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  tdr_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Tdr',
      key: 'idTdr'
    }
  },
  Nom: {
    type: DataTypes.TEXT
  },
  Contenu: {
    type: DataTypes.TEXT('long')
  }
});

const SousChapitre = sequelize.define('SousChapitre', {
  idSousChapitre: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nom: {
    type: DataTypes.TEXT
  },
  Type: {
    type: DataTypes.TEXT
  },
  Valeur: {
    type: DataTypes.TEXT('long')
  }
});

const Tdr = sequelize.define('Tdr', {
  idTdr: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nom: {
    type: DataTypes.TEXT(200)
  }
});

const Utilisateurs = sequelize.define('Utilisateurs', {
  idUtilisateurs: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Email: {
    type: DataTypes.STRING,
    unique: true
  },
  Password: {
    type: DataTypes.STRING
  },
  Nom: {
    type: DataTypes.TEXT(200)
  },
  Prenom: {
    type: DataTypes.TEXT
  }
});

// Définition des relations entre les tables
Tdr.hasMany(Chapitre);
Chapitre.belongsTo(Tdr);
Utilisateurs.hasMany(Tdr);
Tdr.belongsTo(Utilisateurs);

module.exports = {
  Chapitre,
  SousChapitre,
  Tdr,
  Utilisateurs
};