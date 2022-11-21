import * as React from "react";
import {useState} from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import MuiTableHead from "@material-ui/core/TableHead";
import { withStyles } from "@material-ui/core/styles";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import UndoIcon from "@mui/icons-material/Undo";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";
import RefreshIcon from "@mui/icons-material/Refresh";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Results from "./Results";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CreateIcon from '@mui/icons-material/Create';
import HomeIcon from '@mui/icons-material/Home';


const HistoryTable = ({ matches }) => {
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(false);
  const [results_var, setResultsVar] = useState(false);

  const showResults = (res) => {
    setIsShown(true);
    setResultsVar(res);
  };

  const goToHome= async() => {
    navigate("/home");
    }

  const goToMatchesList = async() => {
    navigate("/listmatches");
  }

  const goToMatchForm = async() => {
    navigate("/matches");
  }

  const goBack = async () => {
    navigate("/home");
  };

  const goToResults = async (m) => {
    return(<Results results = {m.results}/>)
  };

  const TableHead = withStyles((theme) => ({
    root: {
      backgroundColor: "rgb(204, 254, 251 )",
    },
  }))(MuiTableHead);



    return[
        <AppBar position="fixed" sx={{ background: 'dark-blue' }} 
        key = {0} >
            <Toolbar style={{display:'flex', justifyContent:"space-between", width:'100%'}}>    
                <Box display='flex' flexGrow={1}>
                    <SmartToyIcon sx={{ fontSize: "80px" }} />
                    <Typography variant="h3" 
                                component="div" 
                                style={{fontWeight: "700",
                                fontFamily: "Roboto",
                                padding: "18px 36px"}} >
                    PyRobots
                    </Typography>
                </Box>  
                <ButtonGroup variant="secondary" aria-label="outlined primary button group">
                    <Button 
                        style={{
                            color: "#fff",
                            fontSize: "22px"
                        }}
                        size="medium"
                        variant="secondary"  
                        startIcon={<CreateIcon  sx={{ fontSize: "large" }} /> }
                        onClick={goToMatchForm}>
                        crear partida
                    </Button>
                    <Button 
                        style={{
                            color: "#fff",
                            fontSize: "22px"
                        }}
                        size="medium"
                        variant="secondary"   
                        startIcon={<FormatListBulletedIcon  sx={{ fontSize: "large" }} /> }
                        onClick={goToMatchesList}>
                        Ver Partidas
                    </Button>
                    <Button 
                        style={{
                            color: "#fff",
                            fontSize: "22px"
                        }}
                        variant="secondary" 
                        startIcon={<HomeIcon  sx={{ fontSize: "large" }} /> } 
                        onClick={goToHome} 
                        sx={{ marginLeft: "auto"}}>
                        Menú
                    </Button>
                </ButtonGroup>
            </Toolbar>
        </AppBar>,
        <Stack> 
        {isShown && <Results results = {results_var}/>}
        </Stack>,
        <Box
        display="flex"
        justifyContent="center"
        alignItems="left"
        minHeight="5vh"
        key = {2}>
        </Box>,
        <Stack> 
        {!isShown &&   <Stack
        spacing={2}>
        
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
                    <TableCell align="right"> 
                    <Button variant="outlined" size="large" endIcon={<RefreshIcon fontSize="large"/> } 
            onClick={() => window.location.reload(false)}></Button>
            </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.keys(matches).map((match) => ( matches[match].is_finished && 
                        matches[match].user_is_already_joined ? 
                        <TableRow key= {match}>
                        <TableCell component="th" scope="row" align="left">
                            {matches[match].name}
                        </TableCell>
                        <TableCell align="right">{<Button variant="contained" onClick=
                            {() => showResults(matches[match].results)}>Resultados</Button>}
                        </TableCell>
                        </TableRow> :     null                
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
            </Stack>}
        </Stack>]
}

export default HistoryTable;