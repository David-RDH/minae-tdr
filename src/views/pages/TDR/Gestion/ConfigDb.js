import { createConnection } from 'typeorm';
import config from './ormconfig.json';

createConnection(config)
  .then(connection => {
    console.log('La connexion à la base de données a réussi');
   
  })
  .catch(error => {
    console.error('Une erreur est survenue lors de la connexion à la base de données :', error);
   
  });