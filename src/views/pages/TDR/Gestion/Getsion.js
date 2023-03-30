import { Button } from '@mui/material';
import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import Liste from './Liste';
// import FormChapitre from './FormChapitre';

const Gestion = () => {
    return (
        <MainCard title="LISTES DES TDR" secondary={<Button>btn</Button>}>
            {/* <FormChapitre /> */}
            <Liste/>
        </MainCard>
    );
};

export default Gestion;
