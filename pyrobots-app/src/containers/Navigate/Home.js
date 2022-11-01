import useNavigate from "react-router-dom";
import Stack from "@mui/system";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CreateIcon from '@mui/icons-material/Create';
import GridOnIcon from '@mui/icons-material/GridOn';
import SmartToyIcon from '@mui/icons-material/SmartToy';

const Home = () => {
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

  return [
    <AppBar position="static" sx={{ background: 'dark-blue' }} 
        style={{
          marginRight: "950px",
            padding: "10px 36px"
        }}>
      <Toolbar >
        <SmartToyIcon sx={{ fontSize: "80px" }} />
        <Typography variant="h3" 
          component="div" 
          style={{fontWeight: "700",
                  fontFamily: "Roboto",
                  padding: "18px 36px"}}>
          PyRobots
        </Typography>
      </Toolbar>
    </AppBar>,
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
          sx={{  width: '300px' }}
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
          sx={{  width: '300px' }}
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
            endIcon={<GridOnIcon  sx={{ fontSize: "80px" }} /> }
            sx={{  width: '300px' }}
            onClick={seeBoard}>ver Tablero</Button>
        </p>
      </Stack>
  ];
};

export default Home;