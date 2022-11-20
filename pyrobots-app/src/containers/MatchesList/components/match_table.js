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
import RefreshIcon from '@mui/icons-material/Refresh';
import Box from '@mui/material/Box';

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

    const renderButtons = (m) => {
        switch(true) {
            case (m.user_is_creator===false && 
                 m.user_is_already_joined===false &&
                 m.is_available_to_join===true &&
                 m.is_started===false):
                return (<Button variant="contained" onClick={() => goToSelectBot(m)}>unirse</Button>)
            case (m.is_available_to_join===false &&
                m.user_is_creator===false &&
                m.user_is_already_joined===false &&
                (m.is_started===false || (m.is_started && m.is_finished===false))):
                return (<Button variant="contained" disabled={true}>unirse</Button>)
            case (m.is_available_to_join===false &&
                m.user_is_creator===true &&
                m.user_is_already_joined===true &&
                (m.is_started===false || (m.is_started && m.is_finished===false))):
                return (<Button variant="contained" onClick={() => goToLobby(m)}>Lobby</Button>)
            case (m.is_available_to_join===false &&
                m.user_is_creator===false &&
                m.user_is_already_joined===true &&
                (m.is_started===false || (m.is_started && m.is_finished===false))):
                return (<Button variant="contained" onClick={() => goToLobby(m)}>Lobby</Button>)
            case (m.is_available_to_join===false &&
                m.user_is_already_joined===true &&
                m.is_started===true &&
                m.is_finished===false):
                return (<Button variant="contained" onClick={() => goToLobby(m)}>Lobby</Button>)
            case (m.user_is_already_joined===true &&
                m.is_finished===true):
                return (<Button variant="contained">Resultados</Button>)
            default:
                return ("caso por contemplar")
        }
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
        <Box
            component="span"
            m={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            >
            <Button variant="contained" size="large" endIcon={<UndoIcon fontSize="large"/> } 
                onClick={goBack} >
            </Button>
            <Button variant="contained" size="large" endIcon={<RefreshIcon fontSize="large"/> } 
            onClick={() => window.location.reload(false)}></Button>
            </Box>
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
                    {Object.keys(matches).map((match) => ( matches[match].is_finished ? null :
                        <TableRow key= {match}>
                        <TableCell component="th" scope="row" align="left">
                            {matches[match].name}
                        </TableCell>
                        <TableCell align="left">   
                            {Object.values(matches[match].players).length+"/"+matches[match].max_players}
                        </TableCell>
                        <TableCell align="left">{renderButtons(matches[match])}
                        </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
        </Stack>)
}

export default MatchTable;