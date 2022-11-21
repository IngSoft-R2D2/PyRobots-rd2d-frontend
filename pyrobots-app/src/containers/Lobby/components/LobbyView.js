import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import SmartToyIcon from "@mui/icons-material/SmartToy";
// import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { Stack } from "@mui/system";
import SummarizeIcon from '@mui/icons-material/Summarize';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import styled from "styled-components";
import PyRobotsAppbar from "./Appbar.js";

const IconContainer = styled.div`
  display: flex;
`;

const LobbyView = (props) => {

  return [
    <PyRobotsAppbar></PyRobotsAppbar>,
      <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      key = {1}
      >
        <Stack> 
        <IconContainer> 
          <SummarizeIcon sx={{ height: '60px', width: '60px' }} style={{ color: "#1C8E40",marginRight: "14px"}}/>
          <Typography variant="h4" style={{fontWeight: "700",
            fontFamily: "Roboto",
            padding: "18px 0px"}}>
              Información de partida
          </Typography>
        </IconContainer>
        <Typography 
        style={{fontWeight: "500",
        fontFamily: "Roboto",
        padding: "18px 0px"}}
        variant="h4" gutterBottom>
          Jugadores 
        </Typography>
          <List sx={{ width: "100%", maxWidth: 360, bgcolor: "white" }}>
            {props.users.map((value) => (
              <Stack> 
              <ListItem>
                <ListItemAvatar>
                <Avatar style={{ backgroundColor: "blue" }}
                sx={{ height: '50px', width: '50px' }}>
                  <SmartToyIcon style={{ fontSize: 40 }}/>
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary={`Jugador ${value}`}  
                primaryTypographyProps={{ style: { fontSize: '1.4rem', fontFamily: "Roboto" } }}/>
              </ListItem>
              <Divider variant="inset" component="li" />
              </Stack> 
            ))}
            {/* {props.robots.map((value) => (
              <ListItem 
              key = {value}>
                <ListItemText primary={`bot ${value}`} />
              </ListItem>
            ))} */}
          </List>
        </Stack> 
      </Box>
  ];
};

export default LobbyView;