import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CreateIcon from '@mui/icons-material/Create';
import GridOnIcon from '@mui/icons-material/GridOn';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@mui/material';
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

const Home = () => {

  const useStyles = makeStyles(theme => ({
    title: {
      flexGrow: 1,
      textAlign: 'center'
    },
  }));
  const classes = useStyles();
  const navigate = useNavigate();

  const goToMatchForm = async() => {
    navigate("/matches");
  }

  const goToBotForm = async() => {
    navigate("/robots");
  }

  const seeBoard = async() => {
    navigate("/board");
  }

  const goToSimForm = async() => {
    navigate("/simulation");
  }

  const goToListBots = async() => {
    navigate("/listrobots");
  }

  const goToMatchesList = async() => {
    navigate("/listmatches");
  }

  return [
    <AppBar position="fixed" sx={{ background: 'dark-blue' }} 
        key = {0} >
        <Toolbar style={{display:'fixed', justifyContent:"space-between", width:'100%'}}>
        <Box display='flex' flexGrow={1}>
          <SmartToyIcon sx={{ fontSize: "80px" }} />
          <Typography variant="h3" 
                      component="div" 
                      style={{fontWeight: "700",
                        fontFamily: "Roboto",
                        padding: "18px 36px"}} 
                      className={classes.title}>
            PyRobots
          </Typography>
        </Box>  
        </Toolbar>
      </AppBar>,
          <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          key = {1}
          >
    <Stack>
      <Typography variant="h4" 
                  component="div" 
                  style={{fontWeight: "700",
                    fontFamily: "Roboto",
                    padding: "25px 36px"}}>
      Bienvenide
      </Typography>
      <Typography variant="h5" 
                  component="div" 
                  style={{fontWeight: "700",
                          fontFamily: "Roboto",
                          padding: "10px 36px"}}>
      Estas son las acciones que puedes elegir
      </Typography>
        <p>
          <Button 
          style={{
            color: "#fff",
            padding: "18px 36px",
            fontSize: "22px"
          }}
          size="medium"
          variant="contained"  
          endIcon={<CreateIcon  sx={{ fontSize: "80px" }} /> }
          sx={{  width: '340px' }}
          onClick={goToMatchForm}>crear partida</Button>
        </p>
        <p>
          <Button 
          style={{
            color: "#fff",
            padding: "18px 36px",
            fontSize: "22px"
          }}
          size="medium"
          variant="contained"  
          endIcon={<FileUploadIcon  sx={{ fontSize: "80px" }} /> }
          sx={{  width: '340px' }}
          onClick={goToBotForm}>crear Robot</Button>
        </p>
        <p>
          <Button 
          style={{
            color: "#fff",
            padding: "18px 36px",
            fontSize: "22px"
          }}
          size="medium"
          variant="contained"  
          endIcon={<CreateIcon sx={{ fontSize: "80px" }} /> }
          sx={{  width: '340px' }}
          onClick={goToSimForm}>crear Simulación</Button>
        </p>
        <p>
          <Button 
          style={{
              color: "#fff",
              padding: "18px 36px",
              fontSize: "22px"
            }}
            size="medium"
            variant="contained"  
            endIcon={<GridOnIcon  sx={{ fontSize: "80px" }} /> }
            sx={{  width: '340px' }}
            onClick={seeBoard}>ver Tablero</Button>
        </p>

        <p>
          <Button 
          style={{
              color: "#fff",
              padding: "18px 36px",
              fontSize: "22px"
            }}
            size="medium"
            variant="contained"  
            endIcon={<FormatListBulletedIcon  sx={{ fontSize: "80px" }} /> }
            sx={{  width: '340px' }}
            onClick={goToListBots}>Listar robots</Button>
        </p>

        <p>
          <Button 
          style={{
              color: "#fff",
              padding: "18px 36px",
              fontSize: "22px"
            }}
            size="medium"
            variant="contained"  
            endIcon={<FormatListBulletedIcon  sx={{ fontSize: "80px" }} /> }
            sx={{  width: '340px' }}
            onClick={goToMatchesList}>Listar partidas</Button>
        </p>
      </Stack>
      </Box>  
  ];
};

export default Home;