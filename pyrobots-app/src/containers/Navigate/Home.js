import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CreateIcon from '@mui/icons-material/Create';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Box } from '@mui/material';

const Home = () => {

  const navigate = useNavigate();

  const goToMatchForm = async () => {
    navigate("/matches");
  }

  const goToBotForm = async () => {
    navigate("/robots");
  }

  const goToSimForm = async () => {
    navigate("/simulation");
  }

  const goToListBots = async () => {
    navigate("/listrobots");
  }

  const goToMatchesList = async () => {
    navigate("/listmatches");
  }

  const goToMatchesHistory = async () => {
    navigate("/history");
  }

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
      <AppBar position="fixed" sx={{ background: 'dark-blue' }}
        key={0} >
        <Toolbar style={{ display: 'fixed', justifyContent: "space-between", width: '100%' }}>
          <Box display='flex' flexGrow={1}>
            <SmartToyIcon sx={{ fontSize: "80px" }} />
            <Typography variant="h3"
              component="div"
              style={{
                fontWeight: "700",
                fontFamily: "Roboto",
                padding: "18px 36px"
              }}
            >
              PyRobots
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Stack
        spacing={"20px"}
      >
        <Typography variant="h4"
          component="div"
          style={{
            fontWeight: "700",
            fontFamily: "Roboto",
            padding: "25px 36px"
          }}>
          Bienvenide
        </Typography>
        <Button
          style={{
            color: "#fff",
            padding: "18px 36px",
            fontSize: "22px"
          }}
          size="medium"
          variant="contained"
          endIcon={<CreateIcon sx={{ fontSize: "80px" }} />}
          sx={{ width: '340px' }}
          onClick={goToMatchForm}>crear partida</Button>
        <Button
          style={{
            color: "#fff",
            padding: "18px 36px",
            fontSize: "22px"
          }}
          size="medium"
          variant="contained"
          endIcon={<FileUploadIcon sx={{ fontSize: "80px" }} />}
          sx={{ width: '340px' }}
          onClick={goToBotForm}>crear Robot</Button>
        <Button
          style={{
            color: "#fff",
            padding: "18px 36px",
            fontSize: "22px"
          }}
          size="medium"
          variant="contained"
          endIcon={<CreateIcon sx={{ fontSize: "80px" }} />}
          sx={{ width: '340px' }}
          onClick={goToSimForm}>crear Simulación</Button>
        <Button
          style={{
            color: "#fff",
            padding: "18px 36px",
            fontSize: "22px"
          }}
          size="medium"
          variant="contained"
          endIcon={<FormatListBulletedIcon sx={{ fontSize: "80px" }} />}
          sx={{ width: '340px' }}
          onClick={goToListBots}>Listar robots</Button>
        <Button
          style={{
            color: "#fff",
            padding: "18px 36px",
            fontSize: "22px"
          }}
          size="medium"
          variant="contained"
          endIcon={<FormatListBulletedIcon sx={{ fontSize: "80px" }} />}
          sx={{ width: '340px' }}
          onClick={goToMatchesList}>Listar partidas</Button>
        <Button
          style={{
            color: "#fff",
            padding: "18px 36px",
            fontSize: "22px"
          }}
          size="medium"
          variant="contained"
          endIcon={<FormatListBulletedIcon sx={{ fontSize: "80px" }} />}
          sx={{ width: '340px' }}
          onClick={goToMatchesHistory}>Historial</Button>
      </Stack>
    </div>
  );
};

export default Home;