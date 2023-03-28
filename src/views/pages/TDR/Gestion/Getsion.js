import { Button } from '@mui/material';
import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import ListeTdr from './ListeTdr';

const Gestion = () => {
    return (
        <MainCard title="LISTES DES TDR" secondary={<Button>btn</Button>}>
             <ListeTdr /> 
        </MainCard>
    );
};

export default Gestion;
