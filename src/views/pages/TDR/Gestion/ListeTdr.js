import React, { useState, useEffect } from 'react';
import db from '../../../../database/tdr.sqlite';
import { TextField, List, ListItem, ListItemText } from '@mui/material';

function ListeTdr() {

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = TDR.filter((tdr) =>
    tdr.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [tdrNames, setTdrNames] = useState([]);

  useEffect(() => {
    const query = db.prepare('SELECT id, name, content FROM files WHERE Tdr IS NOT NULL');
    const results = query.all();
    setTdrNames(results);
  }, []);

  const handleClick = (tdrId) => {
    // Afficher les détails de la TDR avec l'ID correspondant
    const query = db.prepare('SELECT id, name, content FROM files WHERE id = ?');
    const result = query.get(tdrId);
    console.log(result);
    
  };

  return (
    <div>
      <div>
      <TextField
        label="Rechercher"
        value={searchTerm}
        onChange={handleChange}
        sx={{ mb: 2 }}
      />
      <List>
        {filteredItems.map((tdr, index) => (
          <ListItem key={index}>
            <ListItemText primary={tdr} />
          </ListItem>
        ))}
      </List>
    </div>

      <h2>TDR Noms</h2>
      {tdrNames.map((tdrName) => (
        <div key={tdrName.id} onClick={() => handleClick(tdrName.id)}>
          <h3>{tdrName.name}</h3>
          <p>{tdrName.content}</p>
        </div>
      ))}
    </div>

  );
}

//Choisir parmis les listes existantes 
const TDR = ['Tdr 1', 'Tdr 2', 'Tdr 3', 'Tdr 4', 'Tdr 5'];


export default ListeTdr;