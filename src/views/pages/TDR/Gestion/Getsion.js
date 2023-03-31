import { Button } from '@mui/material';
import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
// import ListeTdr from './ListeTdr';
// import AffichageTdr from './AffichageTdr';
// import ClickAffiche from './ClickAffiche';

const Gestion = () => {
    return (
        <MainCard title="LISTES DES TDR" secondary={<Button>btn</Button>}>
             {/* <ListeTdr /> 
             <AffichageTdr /> 
             <ClickAffiche />  */}

        </MainCard>
    );
};

export default Gestion;
