import React from 'react';
import { Stage, Layer, Circle, Rect } from 'react-konva';
import './Board.css';
import { Stack } from "@mui/system";
import { Button }  from "@mui/material";
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import UndoIcon from '@mui/icons-material/Undo';

  const Board = () => { 
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
        <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Rect
            x={20}
            y={50}
            width={500}
            height={500}
            fill= "rgb(68, 189, 92)"
            shadowBlur={10}
          />
         
          <Circle x={300} y={460} radius={10} fill="red" stroke="black"/>
          <Circle x={100} y={300} radius={10} fill="hotpink" stroke="black"/>
          <Circle x={130} y={340} radius={10} fill="yellow" stroke="black"/>
          <Circle x={450} y={490} radius={10} fill="blue" stroke="black"/>

        </Layer>
      </Stage>
      </Stack>
    );
}

export default Board;
