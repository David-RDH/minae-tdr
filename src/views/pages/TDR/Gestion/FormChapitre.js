/*import { Button, FormControl, InputLabel, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import { IconDashboard, IconShadow } from '@tabler/icons';
import { useEffect } from 'react';
import FormSubChapitre from './FormSubChapitre';
import { AddOutlined } from '@mui/icons-material';
import { Component } from 'react';
import db from './tdr.sqlite';

const FormChapitre = () => {
    const [chapitre, setChapitre] = useState(null);
    const [currentChapitre, setCurrentChapitre] = useState(null);
    const [chapitres, setChapitres] = useState([]);
    const [subChapitres, setSubChapitres] = useState([]);
    const [open, setOpen] = useState(false);

    const handleAddSubChapitre = (e) => {
        e.preventDefault()
        console.log('chapitre ==> ', chapitre);
        if (chapitre) {
            setChapitres((old) => {
                return [
                    ...old,
                    {
                        id: chapitres.length,
                        chapitre: chapitre,
                        contenus: []
                    }
                ];
            });
        }
        console.log(chapitres)
    };
//interaction
    
class App extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        Nom: '',
      };
  
      this.handleNomChange = this.handleNomChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleNomChange(event) {
      this.setState({ Nom: event.target.value });
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const { Nom } = this.state;
      const sql = 'INSERT INTO Chapitre (Nom) VALUES (?)';
      db.run(sql, [Nom], (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Chapitre ajouter avec succe');
          this.setState({ Nom: '' });
        }
      });
    }
  
    render() {
    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '1000px',
                }}
            >
                <form onSubmit={handleAddSubChapitre}>
                    <FormControl>
                        <TextField
                            required
                            fullWidth
                            label="Nouvelle Chapitre"
                            value={chapitre}
                            onChange={(e) => setChapitre(e.target.value)}
                        />
                    </FormControl>
                    <Button
                        sx={{ ml: 2, mt: 1 }}
                        variant="contained"
                        startIcon={<AddOutlined />}
                        type='submit'
                    >
                        Créer Chapitre
                    </Button>
                </form>
            </Box>
            <Box>
                {chapitres &&
                    chapitres[0] &&
                    Array.from(chapitres).map((chapitre) => {
                        return (
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignContent: 'center',
                                    mt: 1,
                                    mb: 2,
                                    border: '.2px solid #000',
                                    boxShadow: '0 7px 5px -7px #000, 0 7px 5px -7px #000',
                                    p: 3,
                                    borderRadius: "8px"
                                }}
                                key={chapitre.chapitre}
                            >
                                <Typography variant="body2" key={chapitre.id}>{chapitre.chapitre}</Typography>
                                <Button
                                    variant='contained'
                                    startIcon={<AddOutlined />}
                                    onClick={(e) => {
                                        setCurrentChapitre(chapitre)
                                        setOpen(true)
                                    }}

                                >
                                    Créer un sous-chapitre
                                </Button>
                            </Box>
                        );
                    })}
            </Box>
            <Modal
                open={open}
                onClose={(e) => setOpen(false)}
            >
                <Box
                    sx={{
                        maxHeight: "95vh",
                        overflow: 'auto'
                    }}
                >
                    <FormSubChapitre
                        currentChapitre={currentChapitre}
                        setOpen={setOpen}
                    />
                </Box>
            </Modal>
        </Box>
    );
    }      
}
};

export default FormChapitre;
*/