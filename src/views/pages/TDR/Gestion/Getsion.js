import React, { useState } from 'react';
import { TextField } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
// import FormChapitre from './FormChapitre';
// import ListeTdr from './ListeTdr';
// import AffichageTdr from './AffichageTdr';
const Gestion = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
      };
    return (
        <MainCard title="LISTES DES TDR" secondary={  <TextField
            label="Rechercher"
            value={searchTerm}
            onChange={handleChange}
            sx={{ ml: 2, mt: 1 }}
          />}>
            {/* <FormChapitre /> */}
            {/* <ListeTdr/> */}
            {/* <AffichageTdr/> */}
        </MainCard>
    );
};

export default Gestion;
