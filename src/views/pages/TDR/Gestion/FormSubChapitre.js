import { AddOutlined, Save } from '@mui/icons-material';
import { Alert, Button, Chip, Divider, FormControl, InputLabel, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { IconShadow } from '@tabler/icons';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SubCard from 'ui-component/cards/SubCard';

const sx = {
    m: 2
};

const FormSubChapitre = ({ currentChapitre, setOpen }) => {
    const [libelle, setLibelle] = useState(null);
    const [contenu, setContenu] = useState(null);
    const [contenus, setContenus] = useState([]);
    const [colonne, setColonne] = useState(null);
    const [colonnes, setColonnes] = useState([]);
    const [error, setError] = useState(null);
    const [added, setAdded] = useState(false);
    const [categorie, setCategorie] = useState(null);

    // useEffect(() => {
    //     if (chapitres) {
    //         setCurrentForm(chapitres[chapitres.length - 1]);
    //     }
    // }, [chapitres]);

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError(null);
            }, 3000);
        }
    }, [error]);

    // useEffect(() => {
    //     if (added) {
    //         setOpen(false);
    //     }
    // }, [added]);

    // useEffect(() => {
    //     if (currentForm) {
    //         setChapitres(() => {
    //             return [...chapitres.filter((f) => f.id !== currentForm.id), currentForm];
    //         });
    //     }
    // }, [currentForm]);

    const handleSaveSubChapitre = (e) => {
        e.preventDefault();
        if (!contenu) return setError('Contenu invalide !');

        console.log('===> ', contenus);
        setContenus(old => [...old, contenu]);

        setContenu('');
        // setCurrentForm((old) => {
        //     return {
        //         ...old,
        //         chapitre: chapitre,
        //         libelle: libelle,
        //         contenu: contenu,
        //         save: true
        //     };
        // });

        // setAdded(true);
    };

    const handleAddSubChapitre = (e) => {
        e.preventDefault();
        console.log(e)
    }


    useEffect(() => {
        console.log('tafataftfataftafataftaf', Number.isInteger(colonne))
        if (colonne && Number.isInteger(parseInt(colonne))) {
            setColonnes([]);
            for (let i = 0; i < colonne; i++) {
                console.log('tafa', i)
                setColonnes(old => [
                    ...old,
                    {
                        id: old.length,
                        title: '',
                        type: ''
                    }
                ])
            }
        }
    }, [colonne]);

    return (
        <SubCard sx={{ m: 2, p: 4 }}>
            <form onSubmit={handleAddSubChapitre}>
                <Typography variant="h3" sx={{ textAlign: 'center' }}>
                    Ajouter un Sous-Contenu pour "{currentChapitre.chapitre}"
                </Typography>
                <Stack>
                    <FormControl>
                        <TextField
                            // required
                            sx={sx}
                            fullWidth
                            label="Sous-titre"
                            value={libelle}
                            onChange={(e) => setLibelle(e.target.value)}
                        />
                    </FormControl>
                </Stack>
                <Button
                    type="submit"
                    sx={{ ml: 2, mt: 1 }}
                    variant="contained"
                    startIcon={<AddOutlined />}
                >
                    Créer sous-chapitre
                </Button>
                <Box
                    sx={{
                        ml: 5,
                        mt: 3
                    }}
                >
                    <Button
                        onClick={(e) => {
                            setCategorie('Texte')
                            // setLibelle('')
                        }}
                        variant={categorie === 'Texte' ? 'contained' : 'outlined'}
                        sx={{
                            borderRadius: '20px',
                        }}
                    >
                        Texte
                    </Button>
                    <Button
                        onClick={(e) => {
                            setCategorie('Tableau')
                            // setLibelle('')
                        }}
                        variant={categorie === 'Tableau' ? 'contained' : 'outlined'}
                        sx={{
                            borderRadius: '20px',
                            ml: 1
                        }}
                    >
                        Tableau
                    </Button>
                </Box>
            </form>
            {libelle && categorie === "Texte" && (
                <form onSubmit={handleSaveSubChapitre}>
                    <Box>
                        <Stack>
                            <FormControl>
                                <TextField
                                    sx={sx}
                                    fullWidth
                                    label="Contenu"
                                    value={contenu}
                                    onChange={(e) => setContenu(e.target.value)}
                                />
                            </FormControl>
                        </Stack>
                        <Box>
                            {contenus && contenus[0] && contenus.map((contenu) => {
                                return (
                                    <Box>
                                        <Typography>{contenu}</Typography>
                                    </Box>
                                )
                            })}
                        </Box>
                        <Button
                            type="submit"
                            sx={{ ml: 2, mt: 1 }}
                            variant="contained"
                            startIcon={<AddOutlined />}
                        >
                            Créer
                        </Button>
                        <Button
                            color='error'
                            sx={{ ml: 2, mt: 1 }}
                            variant="contained"
                            onClick={(e) => setOpen(false)}
                        >
                            Annuler
                        </Button>
                    </Box>
                </form>
            )}
            {libelle && categorie === "Tableau" && (
                <form onSubmit={handleSaveSubChapitre}>
                    <Box>
                        <Stack>
                            <FormControl>
                                <TextField
                                    sx={sx}
                                    fullWidth
                                    label="Nombre de colonne"
                                    value={contenu}
                                    onChange={(e) => setColonne(e.target.value)}
                                    type='number'
                                />
                            </FormControl>
                        </Stack>
                        <Stack>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '5px'
                                }}
                            >
                                {colonnes && Array.from(colonnes).map((col, index) => {
                                    return (
                                        <Box
                                            key={index}
                                            sx={{
                                                width: '200px'
                                            }}
                                        >
                                            <TextField
                                                sx={sx}
                                                fullWidth
                                                label="Titre de colonne"
                                            // value={contenu}
                                            // onChange={(e) => setColonne(e.target.value)}
                                            />
                                        </Box>
                                    )
                                })}
                            </Box>
                        </Stack>
                        <Button
                            type="submit"
                            sx={{ ml: 2, mt: 1 }}
                            variant="contained"
                            startIcon={<AddOutlined />}
                        >
                            Enrigestrer
                        </Button>
                        <Button
                            color='error'
                            sx={{ ml: 2, mt: 1 }}
                            variant="contained"
                            onClick={(e) => setOpen(false)}
                        >
                            Annuler
                        </Button>
                    </Box>
                </form>
            )}

            <Divider sx={{ mt: 5, mb: 2 }} />

            <Button
                type="submit"
                sx={{
                    ml: 2,
                    mt: 1,
                    width: '100%'
                }}
                variant="contained"
                startIcon={<Save />}
            >
                Enrigestrer Sous-chapitre
            </Button>
            <Divider sx={{ mt: 5, mb: 2 }} />
            <Box>{error && <Alert severity="error">{error}</Alert>}</Box>
        </SubCard>
    );
};

export default FormSubChapitre;
