import React, { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import {
    Button,
    TextField,
    Paper,
    ToggleButtonGroup,
    ToggleButton,
    Stack,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TableContainer
} from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import BudgetTable from './BudgetTable';
import FinalTable from '../FinalTable';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Chapter = ({ chapter, subchapters, onAddSubchapter }) => {
    const [newSubchapter, setNewSubchapter] = useState('');
    const [chapterType, setchapterType] = useState('text')
    const [valueSubchapter, setValueSubchapter] = useState('');
    


    const handleAddSubchapter = () => {
        if (newSubchapter.trim() !== '') {
            const newSubchapters = [...subchapters, {
                name: newSubchapter,
                type: chapterType,
                value: valueSubchapter
            }];
            setNewSubchapter('');
            setchapterType('text');
            setValueSubchapter('');
            onAddSubchapter(chapter, newSubchapters);
        }
    }

    const handleSubchapterChange = event => {
        setNewSubchapter(event.target.value);
    }

    const handleChangeSubchapterType = event => {
        setchapterType(event.target.value)
    }

    return (
        <div>
            <Paper variant="outlined" style={{ marginBottom: '20px', padding: '20px' }}>
                <Stack direction="row" spacing={2}>
                    <Item>
                        <label>Nom du sous-chapitre</label>
                        <br />
                        <TextField
                            type="text"
                            label="Nom du sous-chapitre"
                            value={newSubchapter}
                            onChange={handleSubchapterChange}
                        />
                    </Item>
                    <Item>
                        <label>Type</label>
                        <br />
                        <ToggleButtonGroup
                            color="primary"
                            value={chapterType}
                            onChange={handleChangeSubchapterType}
                            aria-label="Platform"
                        >
                            <ToggleButton value="text">Text libre</ToggleButton>
                            <ToggleButton value="table">Tableau budget</ToggleButton>
                        </ToggleButtonGroup>
                    </Item>
                </Stack>

                {
                    chapterType === 'text' && (
                        <CKEditor
                            editor={ClassicEditor}
                            data={valueSubchapter}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                setValueSubchapter(data)
                                console.log(data);
                            }}
                        />
                    )
                }

                {
                    chapterType === 'table' && (
                            <BudgetTable />
                    )
                }

                {
                    chapterType === 'text' && (
                        <Button
                            sx={{ ml: 2, mt: 1 }}
                            startIcon={<AddOutlined />}
                            variant="contained"
                            onClick={handleAddSubchapter}
                        >Ajouter le sous-chapitre</Button>
                    )
                }
            </Paper>
            
            {
                subchapters.length > 0 && (
                    <TableContainer>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nom</TableCell>
                                    <TableCell>Type</TableCell>
                                    <TableCell>Valeur</TableCell>
                                    <TableCell>Visualisation</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {subchapters.map(subchapter => (
                                    <TableRow key={subchapter}>
                                        <TableCell>{subchapter.name}</TableCell>
                                        <TableCell>{subchapter.type}</TableCell>
                                        <TableCell>{subchapter.value}</TableCell>
                                        <TableCell>
                                            <div dangerouslySetInnerHTML={{ __html: subchapter.value }} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )
            }
        </div>
    );
}

const Chapters = () => {
    const [newChapter, setNewChapter] = useState('');
    const [chapters, setChapters] = useState([]);

    const handleAddChapter = () => {
        if (newChapter.trim() !== '') {
            const newChapters = [...chapters, { name: newChapter, subchapters: [] }];
            setNewChapter('');
            setChapters(newChapters);
        }
    }

    const handleAddSubchapter = (chapterName, newSubchapters) => {
        const updatedChapters = chapters.map(chapter => {
            if (chapter.name === chapterName) {
                return { ...chapter, subchapters: newSubchapters };
            }
            return chapter;
        });
        setChapters(updatedChapters);
    }

    const handleChapterChange = event => {
        setNewChapter(event.target.value);
    }

    const handleSaveAll = () => {
        console.log(chapters)
    }

    return (
        <div>
            <MainCard title="CREATION D'UN TDR" secondary={<Button onClick={handleSaveAll}>ENREGISTRER</Button>}>
                <h1>Chapitres</h1>
                <div>
                    <TextField
                        type="text"
                        label="Nom du chapitre"
                        value={newChapter}
                        onChange={handleChapterChange}
                    />
                    <Button
                        sx={{ ml: 2, mt: 1 }}
                        startIcon={<AddOutlined />}
                        onClick={handleAddChapter}
                        variant="contained"
                    >Ajouter un chapitre</Button>
                </div>
            </MainCard>
            {chapters.map(chapter => (
                <MainCard
                    title={chapter.name}
                    style={{ marginTop: '20px' }}
                >
                    <Chapter
                        key={chapter.name}
                        chapter={chapter.name}
                        subchapters={chapter.subchapters}
                        onAddSubchapter={handleAddSubchapter}
                    />
                </MainCard>
            ))}
        </div>
    );
}

export default Chapters;