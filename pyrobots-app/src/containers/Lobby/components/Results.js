import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Stack } from "@mui/system";
import StarsIcon from '@mui/icons-material/Stars';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CreateIcon from '@mui/icons-material/Create';
import HomeIcon from '@mui/icons-material/Home';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: '10px 10px',
    maxWidth: 950
  },
  tableHeaderCell: {
      fontWeight: 'bold',
      fontSize: 20,
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.getContrastText(theme.palette.primary.dark)
  },
  avatar: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.getContrastText(theme.palette.primary.dark)
  },
  name: {
    fontWeight: 'bold',
    color: theme.palette.info.dark
},
}));

//  const StyledTableCell = styled(TableCell)(({ theme }) => ({
//    [`&.${tableCellClasses.head}`]: {
//      backgroundColor: theme.palette.common.black,
//      color: theme.palette.common.white,
//   },
//    [`&.${tableCellClasses.body}`]: {
//      fontSize: 20,
//    },
//  }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//    '&:nth-of-type(odd)': {
//      backgroundColor: theme.palette.action.hover,
//   },
//    // hide last border
//   '&:last-child td, &:last-child th': {
//      border: 0,
//    },
//  }));

// const useStyles = makeStyles(theme => ({
//   title: {
//     flexGrow: 1,
//     textAlign: 'left',
//   },
// }));

const Results = (props) => {
  const navigate = useNavigate();

  const goToHome= async() => {
    navigate("/home");
  }
  
  const goToMatchesList = async() => {
    navigate("/listmatches");
  }
  
  const goToMatchForm = async() => {
    navigate("/matches");
  }
  
  const classes = useStyles();

  return [
    <AppBar position="fixed" sx={{ background: 'dark-blue' }} 
      key = {0} >
      <Toolbar style={{display:'flex', justifyContent:"space-between", width:'100%'}}>    
      <Box display='flex' flexGrow={1}>
          <SmartToyIcon sx={{ fontSize: "80px" }} />
          <Typography variant="h3" 
                      component="div" 
                      style={{fontWeight: "700",
                      fontFamily: "Roboto",
                      padding: "18px 36px"}} 
          >
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
              Ver partidas
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
      <Box
      display="flex"
      justifyContent="center"
      alignItems="left"
      minHeight="35vh"
      key = {1}
      >
      <Stack direction="row" alignItems="center" gap={1} >
        <CheckCircleIcon style={{ color: "#1C8E40"}}/>
        <Typography variant="h5" style={{fontWeight: "700",
        fontFamily: "Roboto"}}>Partida finalizada!</Typography>
      </Stack>
      </Box>,
      <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
         <TableHead>
           <TableRow>
           <TableCell className={classes.tableHeaderCell}>Jugadores</TableCell>
            <TableCell  align="right" className={classes.tableHeaderCell}>Juegos ganados</TableCell>
            <TableCell  align="right" className={classes.tableHeaderCell}>Juegos perdidos</TableCell>
          </TableRow>
         </TableHead>
         <TableBody>
          {props.results.map((row) => (
             <TableRow key={row.user_name}>
              <TableCell scope="row">
              <Grid item lg={10}>
                <Typography className={classes.name}>{row.user_name}</Typography>
                <Typography color="textSecondary" variant="body2">{row.robot_name}</Typography>
              </Grid>
              </TableCell>
              <TableCell align="right">{row.won_games}</TableCell>
              <TableCell align="right">{row.lost_games}</TableCell>
             </TableRow>
          ))}
         </TableBody>
       </Table>
    </TableContainer>
  ];
}

export default Results;