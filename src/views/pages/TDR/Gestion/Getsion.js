import { Button } from '@mui/material';
import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import FormChapitre from './FormChapitre';

const Gestion = () => {
    return (
        <MainCard title="LISTES DES TDR" secondary={<Button>btn</Button>}>
            <FormChapitre />
        </MainCard>
    );
};

export default Gestion;
