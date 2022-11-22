import Typography from '@mui/material/Typography';
import { Stack } from "@mui/system";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';
import PyRobotsAppbar from "./Appbar.js";

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
    name: {
        fontWeight: 'bold',
        color: theme.palette.info.dark
},
}));

const Results = (props) => {

  const classes = useStyles();

    return (
        <div style={{
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
        <Stack alignItems="center" gap={1} >
            <Stack direction="row" alignItems="center" gap={1} >
                <CheckCircleIcon style={{ color: "#1C8E40", marginTop: 120}}/>
                <Typography variant="h5" style={{fontWeight: "700",
                fontFamily: "Roboto", marginTop: 120, padding: "18px 10px"}}>
                    Partida finalizada!
                </Typography>
            </Stack>
        <TableContainer style={{marginTop: 18}} component={Paper} className={classes.tableContainer}>
        <Table sx={{ minWidth: 700 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell className={classes.tableHeaderCell}>Jugadores</TableCell>
                    <TableCell  align="right" className={classes.tableHeaderCell}>
                        Juegos ganados
                    </TableCell>
                    <TableCell  align="right" className={classes.tableHeaderCell}>
                        Juegos perdidos
                    </TableCell>
                </TableRow>
            </TableHead>
                <TableBody>
                {props.results && props.results.map((row) => (
                    <TableRow key={row.user_name}>
                        <TableCell scope="row">
                            <Grid item lg={10}>
                                <Typography className={classes.name}>
                                    {row.user_name}
                                </Typography>
                                <Typography color="textSecondary" variant="body2">
                                    {row.robot_name}
                                </Typography>
                            </Grid>
                        </TableCell>
                        <TableCell align="right">{row.won_games}</TableCell>
                        <TableCell align="right">{row.lost_games}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        </Stack>
        </div>
    );
}

export default Results;