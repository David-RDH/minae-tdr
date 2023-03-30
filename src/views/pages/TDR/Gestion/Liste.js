import React, { useState } from 'react';
import { TextField, List, ListItem, ListItemText } from '@mui/material';

const Liste = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = TDR.filter((tdr) =>
    tdr.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
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
  );
};

//Choisir parmis les listes existantes 
const TDR = ['Tdr 1', 'Tdr 2', 'Tdr 3', 'Tdr 4', 'Tdr 5'];

export default Liste;
