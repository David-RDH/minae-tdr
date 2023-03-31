import React, { useState } from 'react';
import { TextField } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
<<<<<<< HEAD
// import FormChapitre from './FormChapitre';
// import ListeTdr from './ListeTdr';
// import AffichageTdr from './AffichageTdr';
=======
import ListeTdr from './ListeTdr';
import AffichageTdr from './AffichageTdr';
import ClickAffiche from './ClickAffiche';

>>>>>>> 8df0c1d543f42134844f226036671ff206a4aada
const Gestion = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
      };
    return (
<<<<<<< HEAD
        <MainCard title="LISTES DES TDR" secondary={  <TextField
            label="Rechercher"
            value={searchTerm}
            onChange={handleChange}
            sx={{ ml: 2, mt: 1 }}
          />}>
            {/* <FormChapitre /> */}
            {/* <ListeTdr/> */}
            {/* <AffichageTdr/> */}
=======
        <MainCard title="LISTES DES TDR" secondary={<Button>btn</Button>}>
             <ListeTdr /> 
             <AffichageTdr /> 
             <ClickAffiche /> 

>>>>>>> 8df0c1d543f42134844f226036671ff206a4aada
        </MainCard>
    );
};

export default Gestion;
