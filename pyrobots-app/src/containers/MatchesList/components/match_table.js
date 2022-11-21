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
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";
import RefreshIcon from '@mui/icons-material/Refresh';
import Box from '@mui/material/Box';
import PyRobotsAppbar from "./Appbar.js";
import IconButton from '@mui/material/IconButton';

const MatchTable = ({matches}) => {

    const goToLobby= async(m) => {
        navigate(`lobby/${m.id}` , 
                    {state: {user_id: m.user_id,
                            user_is_creator: m.user_is_creator,
                            match_name: m.name}});
    }

    const goToSelectBot= async(m) => {
        navigate(`select`, 
                    {state: {m_id: m.id,
                            user_id: m.user_id,
                            user_is_creator: m.user_is_creator,
                            match_name: m.name,
                            is_secured: m.is_secured}});
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


    return(<div style={{
        display: "flex",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        top: 0,
        left: 0
      }}>
      <PyRobotsAppbar></PyRobotsAppbar>
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
            </Box>
        <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell align="left">Nombre</TableCell>
                    <TableCell align="left">Jugadores</TableCell>
                    <TableCell align="right"><IconButton onClick={() => window.location.reload(false)} color="primary">
                <RefreshIcon />
                </IconButton> </TableCell>
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
                        <TableCell align="right">{renderButtons(matches[match])}
                        </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
        </Stack>        
        </div>
    );        

}

export default MatchTable;