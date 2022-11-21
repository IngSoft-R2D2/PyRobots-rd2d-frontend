import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const Root = () => {

  const navigate = useNavigate();

  const goToSignUp = async () => {
    navigate("/users");
  }

  const goToLogin = async () => {
    navigate("/login");
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
      <AppBar position="fixed" sx={{ background: 'dark-blue' }}>
        <Toolbar >
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
        </Toolbar>
      </AppBar>
      <div>
        <Stack
          style={{
            height: "100%",
            width: "100%",
            padding: "10px 36px"
          }}
        >
          <Typography variant="h4"
            component="div"
            style={{
              fontWeight: "700",
              fontFamily: "Roboto",
              padding: "30px 36px"
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
              endIcon={<PersonIcon sx={{ fontSize: "large" }} />}
              sx={{ width: '300px' }}
              onClick={goToSignUp}>Registrarme</Button>
            <Button
              style={{
                color: "#fff",
                padding: "18px 36px",
                fontSize: "22px"
              }}
              size="medium"
              variant="contained"
              endIcon={<LoginIcon sx={{ fontSize: "large" }} />}
              sx={{ width: '300px' }}
              onClick={goToLogin}>Loguearme</Button>
        </Stack>
      </div>
    </div>
  );
};

export default Root;