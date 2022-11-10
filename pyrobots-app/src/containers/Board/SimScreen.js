import React from 'react';
import './Board.css';
import { Stack } from "@mui/system";
import { Button }  from "@mui/material";
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import UndoIcon from '@mui/icons-material/Undo';
import Animation from './animation.js';

const SimScreen = () => {
    const navigate = useNavigate();
    const goBack= async() => {
        navigate("/home");
    }
    return (
    <Stack>
      <AppBar position="static" sx={{ background: 'dark-blue' }} 
      style={{
          marginRight: 500,
          padding: "18px 36px"
      }}
      key = {0} >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <SmartToyIcon sx={{ fontSize: "80px" }} />
        <Typography variant="h3" 
                    component="div" 
                    style={{fontWeight: "500",
                      fontFamily: "Roboto",
                      padding: "18px 36px"}}>
          Simulación
        </Typography>
        <Button 
            style={{
              color: "#fff",
              padding: "18px 36px",
              fontSize: "22px"
            }}
            variant="secondary" 
            endIcon={<UndoIcon  sx={{ fontSize: "large" }} /> } 
            onClick={goBack} 
            sx={{ marginLeft: "auto" }}>
            Volver atrás
        </Button>
      </Toolbar>
    </AppBar>
    <Animation />
    </Stack>
    )
}
export default SimScreen;
