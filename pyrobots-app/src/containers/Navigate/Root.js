import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import Typography from '@mui/material/Typography';

const Root = () => {

  const navigate = useNavigate();

  const goToSignUp = async() => {
    navigate("/users");
  }

  const goToLogin= async() => {
    navigate("/login");
  }

  return [
    <AppBar position="static" sx={{ background: 'dark-blue' }} 
        style={{
          marginRight: "950px",
            padding: "10px 36px"
        }}
    >
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
                        padding: "30px 36px"}}>
        Bienvenide
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
            endIcon={<PersonIcon  sx={{ fontSize: "large" }} /> }
            sx={{  width: '300px' }}
            onClick={goToSignUp}>Registrarme</Button>
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
            endIcon={<LoginIcon  sx={{ fontSize: "large" }} /> }
            sx={{  width: '300px' }}
            onClick={goToLogin}>Loguearme</Button>
          </p>
      </Stack>
    ];
};

export default Root;