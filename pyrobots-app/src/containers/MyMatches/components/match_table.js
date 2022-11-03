import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import UndoIcon from '@mui/icons-material/Undo';
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";


const MatchTable = (props) => {
    const matches = props.matches
    const mode = props.mode
    const navigate = useNavigate();
    const goBack= async() => {
        navigate("/home");
    
    }
    return(
        <Stack
        spacing={2}
        >
        <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell align="right">Participantes</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {matches.map((match) => (
                        <TableRow
                        key={'tablerowkey'+match[0]}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {match[0]}
                        </TableCell>
                        <TableCell align="right">{match[1]}</TableCell>
                        <TableCell align="right">{(mode==="join") ? 
                            <Button variant="contained">Unirse</Button>
                            : <Button variant="contained">Iniciar</Button>}
                        </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" size="large" endIcon={<UndoIcon fontSize="large"/> } 
                onClick={goBack} > Volver atras 
            </Button>
        </Stack>)
}

export default MatchTable;