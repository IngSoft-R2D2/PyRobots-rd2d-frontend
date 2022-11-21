// import React from "react";
import { useState, useEffect } from 'react';
import { fetchToken } from '../Commons/Auth.js'
import BotList from "./components/BotList.js";
import ButtonJoin from "../MatchesList/components/ButtonJoin.js"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useLocation } from 'react-router-dom'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import { Stack } from "@mui/system";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import UndoIcon from '@mui/icons-material/Undo';
import { Button, TextField } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import NoBotScreenJoin from './components/NoBotScreenJoin.js';

const BotSelect = ()=> {
    
    const [loading, setLoading] = useState(true)
    const [robot, setRobot] = useState({robot_id:''})
    const [robots, setRobots] = useState([]);
    const [password, setPassword] = useState(null)
    const location = useLocation();
    const match_id = location.state.m_id;
    const is_secured = location.state.is_secured;

  const navigate = useNavigate();
  const goBack = async () => {
    navigate("/listmatches");
  }

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    const token = fetchToken();
    fetch(`http://localhost:8000/robots`, {
      method: "GET",
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setRobots(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  return (
    loading ?
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop> :
      (Object.keys(robots).length === 0) ?
        <NoBotScreenJoin /> :
        (<div style={{
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
            style={{
              marginRight: '0px',
              padding: "18px 36px"
            }}
            key={0} >
            <Toolbar >
              <SmartToyIcon sx={{ fontSize: "80px" }} />
              <Typography variant="h3"
                component="div"
                style={{
                  fontWeight: "500",
                  fontFamily: "Roboto",
                  padding: "10px 36px"
                }}>
                Selección de Robots
              </Typography>
              <Button
                style={{
                  color: "#fff",
                  padding: "10px 36px",
                  fontSize: "20px"
                }}
                variant="secondary"
                endIcon={<UndoIcon sx={{ fontSize: "large" }} />}
                onClick={goBack}
                sx={{ marginLeft: "auto" }}>
                Volver atrás
              </Button>
            </Toolbar>
          </AppBar>
          <div>
            <Stack
              spacing={20}
              direction='row'
              style={{
                height: "100%",
                width: "100%",
                padding: "10px 36px"
              }}
            >
              <Stack
                spacing={5}
              >
                <BotList
                  robot={robot}
                  setRobot={setRobot}
                  robots={robots}
                />
                <Box>
                  <InputLabel
                    id="robot-label">Contraseña</InputLabel>
                  <TextField
                    disabled={!is_secured}
                    id="password-field"
                    onChange={handlePasswordInput}
                  />
                </Box>
              </Stack>
            <ButtonJoin
              match_id={match_id} 
              robot_id={robot.robot_id}
              user_id= {location.state.user_id}
              user_is_creator= {location.state.user_is_creator}
              match_name= {location.state.match_name}
              password={password}
            />
          </Stack>
          </div>
        </div>)
    )
}

export default BotSelect;