import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Modal, Box,
  TextField
} from "@mui/material";

import MainCard from 'ui-component/cards/MainCard';
import { AddOutlined } from '@mui/icons-material';
import { useState } from 'react';

import mitt from "mitt";

const BudgetTable = () => {
  let emitter = mitt();
  // start modal setup
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100ch',
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 2,
    textAlign: 'center'
  };

  const inputStyle = {
    small: {
      width: '23%',
      margin: '1%'
    },
    large: {
      width: '46%',
      marginRight: '4%'
    }
  }
  // end modal setup

  const [allRows, setAllRows] = useState([])
  const [newRow, setnewRow] = useState({
    id: 0,
    designation: '',
    unite: '',
    quantite: 1,
    pu: 0,
    nb_jour: 0,
    total: 0,
    obs: ''
  });

  const [afficherTableau, setAfficherTableau] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // const SaveTable = () => {
  //   setAfficherTableau(!afficherTableau);
  //   setIsOpen(true)

  // };

  const totaux = () => {
    let value = 0
    allRows.forEach(r => {
      value = + value + r.total
    })

    return value.toLocaleString().replaceAll(',', ' ')
  }

  const handleAddNewRow = () => {
    let newID = newRow.id + 1
    setnewRow({
      id: newID,
      designation: '',
      unite: '',
      quantite: 1,
      pu: 0,
      nb_jour: 0,
      total: 0,
      obs: ''
    })
    setAllRows([...allRows, {
      id: newID,
      designation: newRow.designation,
      unite: newRow.unite,
      quantite: newRow.quantite,
      pu: newRow.pu,
      nb_jour: newRow.nb_jour,
      total: newRow.pu * newRow.nb_jour * newRow.quantite,
      obs: newRow.obs
    }])
  }

  const handleSaveAll = () => {
    emitter.emit('saveBudgetTable', allRows);
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <div>
            <TextField
              sx={inputStyle.large}
              name="designation" value={newRow.designation}
              onChange={(e) => setnewRow({ ...newRow, designation: e.target.value })}
              size="small" id="outlined-basic" label="Designation" variant="outlined" />
            <TextField
              sx={inputStyle.large}
              name="obs" value={newRow.obs}
              onChange={(e) => setnewRow({ ...newRow, obs: e.target.value })}
              size="small" id="outlined-basic" label="Observation" variant="outlined" />
          </div>
          <div>
            <TextField
              sx={inputStyle.small}
              name="unite" value={newRow.unite}
              onChange={(e) => setnewRow({ ...newRow, unite: e.target.value })}
              size="small" id="outlined-basic" label="Unité" variant="outlined" />
            <TextField
              sx={inputStyle.small}
              name="quantite" value={newRow.quantite}
              onChange={(e) => setnewRow({ ...newRow, quantite: parseInt(e.target.value) })}
              size="small" type="number" id="outlined-basic" label="Quantité" variant="outlined" />
            <TextField
              sx={inputStyle.small}
              name="pu" value={newRow.pu}
              onChange={(e) => setnewRow({ ...newRow, pu: parseInt(e.target.value) })}
              size="small" type="number" id="outlined-basic" label="Prix unitaire" variant="outlined" />
            <TextField
              sx={inputStyle.small}
              name="nb_jour" value={newRow.nb_jour}
              onChange={(e) => setnewRow({ ...newRow, nb_jour: parseInt(e.target.value) })}
              size="small" type="number" id="outlined-basic" label="Nombre de jour" variant="outlined" />
          </div>
          <Button variant="contained" onClick={handleAddNewRow}>Ajouter</Button>
        </Box>
      </Modal>
      <MainCard title="Tableau de budget" secondary={
        <Button sx={{ ml: 2, mt: 1 }}
          startIcon={<AddOutlined />} variant="contained" onClick={handleOpen}>Entrer les lignes</Button>
      }>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Designation</TableCell>
                <TableCell align="right">Unites</TableCell>
                <TableCell align="right">Quantite</TableCell>
                <TableCell align="right">Prix Unitaire(Ar)</TableCell>
                <TableCell align="right">Nombre de jour</TableCell>
                <TableCell align="right">Cout total(Ar)</TableCell>
                <TableCell align="right">Observations</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allRows.map(row => (
                <TableRow key={row.id}>
                  <TableCell>{row.designation}</TableCell>
                  <TableCell>{row.unite}</TableCell>
                  <TableCell>{row.quantite}</TableCell>
                  <TableCell align="right">{row.pu.toLocaleString().replaceAll(',', ' ')}</TableCell>
                  <TableCell>{row.nb_jour}</TableCell>
                  <TableCell align="right">{row.total.toLocaleString().replaceAll(',', ' ')}</TableCell>
                  <TableCell>{row.obs}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={5}>Somme total</TableCell>
                <TableCell align="right">{totaux()}</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <pre>{JSON.stringify(allRows)}</pre>
        <Button
          sx={{ ml: 2, mt: 1 }}
          startIcon={<AddOutlined />}
          variant="contained"
          onClick={handleSaveAll}
        >Enregistrer</Button>
      </MainCard>
    </div>
  );
};

export default BudgetTable;
