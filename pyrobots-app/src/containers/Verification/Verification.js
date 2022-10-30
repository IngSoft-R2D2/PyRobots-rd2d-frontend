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
import './Navigate.css'

const Verification = () => {

  const navigate = useNavigate();
  const goToLogin= async() => {
      navigate("/login");
  }

  return [
      <AppBar position="static" sx={{ background: 'dark-blue' }} 
        style={{
            marginRight: 800,
            padding: "18px 36px"
        }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <SmartToyIcon sx={{ fontSize: "80px" }} />
          <Typography variant="h3" 
                      component="div" 
                      style={{fontWeight: "700",
                        fontFamily: "Roboto",
                        padding: "18px 36px"}}>
            PyRobots
          </Typography>
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
        minHeight="25vh"
        >
          <Alert severity="success"
          sx={{  width: '800px','& .MuiAlert-message':{textAlign:"center", width:"100%"} }}
          style={{fontFamily: "Roboto"}}>
            <AlertTitle style={{fontFamily: "Roboto"}}>
              Verificación exitosa
            </AlertTitle>
            Tu email ha sido verificado — <strong>Ya podés loguearte y jugar PyRobots!</strong>
          </Alert>
        </Box>
  ];
}

export default Verification;
