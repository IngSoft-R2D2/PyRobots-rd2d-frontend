import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";
import { Alert,
        AlertTitle,
        Box } from '@mui/material';

const Verification = () => {

  const navigate = useNavigate();
  const goToLogin= async() => {
      navigate("/login");
  }

  return [
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
      </AppBar>,

        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="10vh"
        key = {1}
        >
          <Alert severity="success"
          sx={{  width: '1200px','& .MuiAlert-message':{textAlign:"center", width:"100%"}, padding: "18px 36px"}}
          style={{fontFamily: "Roboto", fontSize: 25}}>
            <AlertTitle style={{fontFamily: "Roboto", fontSize: 30}}>
              Verificación exitosa
            </AlertTitle>
            Tu email ha sido verificado — <strong>Ya podés loguearte y jugar PyRobots!</strong>
          </Alert>
        </Box>
        </div>
  ];
}

export default Verification;