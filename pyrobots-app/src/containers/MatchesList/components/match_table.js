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
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";


const MatchTable = (props) => {
    const matches_join = props.matches_join
    const matches_mine = props.matches_mine
    const mode = props.mode
    const navigate = useNavigate();
    var lists = [matches_mine, matches_join];
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
                {lists.map((list) => (   
                    list.map((match) => (
                        <TableRow
                        key={'tablerowkey'+match[0]} //reemplazar por una key siempre única
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {match[0]}
                        </TableCell>
                        <TableCell align="right">{match[1]}</TableCell>
                        <TableCell align="right">{(lists.indexOf(list)===1) ? 
                            <Button variant="contained" >Unirse</Button>
                            : <Button variant="contained" endIcon={<MeetingRoomIcon  sx={{ fontSize: "800px" }} /> }></Button>}
                        </TableCell>
                        </TableRow>
                    ))
                ))}
                </TableBody>
                </Table>
            </TableContainer>
            {/* <Button variant="contained" size="large" endIcon={<UndoIcon fontSize="large"/> } 
                onClick={goBack} > Volver atras 
            </Button> */}
        </Stack>)
}

export default MatchTable;