import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';
import PyRobotsAppbar from "./AppbarResults.js";

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

    return [
        <PyRobotsAppbar></PyRobotsAppbar>,
        <Box
        display="flex"
        justifyContent="center"
        alignItems="left"
        minHeight="25vh"
        key = {2}>
        </Box>,
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
                {props.results && props.results.participants.map((row) => (
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
    ];
}

export default Results;