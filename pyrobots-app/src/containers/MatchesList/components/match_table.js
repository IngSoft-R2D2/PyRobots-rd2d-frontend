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
//import ButtonJoin from "./ButtonJoin.js"

const MatchTable = ({matches}) => {
    console.log(matches)
    const navigate = useNavigate();

    const goBack= async() => {
        navigate("/home");

    }

    const goToLobby= async(m) => {
        navigate(`lobby/${m.id}`, 
        {state: {players: m.players, id: m.user_id, is_creator: m.user_is_creator}});
        //lista de users y robots
    }

    const goToSelectBot= async(m_id) => {
        navigate(`select`, {state: m_id}); 
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
                    {Object.keys(matches).map((match) => (
                        <TableRow
                        key={'tablerowkey'+matches[match]} //reemplazar por una key siempre única
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {matches[match].name}
                        </TableCell>
                        <TableCell align="right">{JSON.stringify(matches[match].players)}</TableCell>
                        {/* aparece el boton join si: no es creador, no esta unido, hay lugar y no empezo*/}
                        <TableCell align="right">{(matches[match].user_is_creator===false && 
                                                   matches[match].user_is_already_joined===false &&
                                                   matches[match].is_available_to_join===true &&
                                                   matches[match].is_started===false) ? 
                            <Button variant="contained" onClick={() => goToSelectBot(matches[match].id)}>unirse</Button>
                            : <Button variant="contained" onClick={() => goToLobby(matches[match])}>Lobby</Button>}
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