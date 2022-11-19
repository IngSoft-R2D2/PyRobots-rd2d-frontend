import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import MuiTableHead from "@material-ui/core/TableHead";
import { withStyles } from "@material-ui/core/styles";
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import UndoIcon from '@mui/icons-material/Undo';
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";


const MatchTable = ({matches}) => {
    const navigate = useNavigate();

    const goBack= async() => {
        navigate("/home");

    }

    const goToLobby= async(m) => {
        navigate(`lobby/${m.id}`, 
                    {state: {players: m.players, 
                             id: m.user_id,
                             is_creator: m.user_is_creator,
                             is_started: m.is_started}});
    }

    const goToSelectBot= async(m) => {
        navigate(`select`, 
                    {state: {m_id: m.id, 
                             players: m.players,
                             user_id: m.user_id,
                             is_creator: m.user_is_creator,
                             user_name: m.user_name,
                             is_started: m.is_started}}); 
    }

    const TableHead = withStyles(theme => ({
        root: {
          backgroundColor: "rgb(204, 254, 251 )"
        }
      }))(MuiTableHead);


    return(
        <Stack
        spacing={2}
        >
        <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell align="left">Nombre</TableCell>
                    <TableCell align="left">Jugadores</TableCell>
                    <TableCell align="left"> </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.keys(matches).map((match) => (
                        <TableRow key= {match}>
                        <TableCell component="th" scope="row" align="left">
                            {matches[match].name}
                        </TableCell>
                        <TableCell align="left">   
                            {Object.values(matches[match].players).length+"/"+matches[match].max_players}
                        </TableCell>
                        {/* aparece el boton join si: no es creador, no esta unido, hay lugar y no empezo*/}
                        <TableCell align="left">{(matches[match].user_is_creator===false && 
                                                   matches[match].user_is_already_joined===false &&
                                                   matches[match].is_available_to_join===true &&
                                                   matches[match].is_started===false) ? 
                            <Button variant="contained" onClick={() => goToSelectBot(matches[match])}>unirse</Button>
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