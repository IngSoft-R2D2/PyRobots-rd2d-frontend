import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';

const PyRobotsAppbar = () => {

    const navigate = useNavigate();

    const goToLogin= async() => {
        navigate("/login");
    }
  
  return(
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
            <Button 
                style={{
                  color: "#fff",
                  padding: "18px 36px",
                  fontSize: "22px"
                }}
                variant="secondary" 
                endIcon={<LoginIcon  sx={{ fontSize: "800px" }} /> } 
                onClick={goToLogin} 
                sx={{ marginLeft: "auto" }}>
                LogIn
            </Button>
          </Toolbar>
        </AppBar>
    );
};

export default PyRobotsAppbar;
