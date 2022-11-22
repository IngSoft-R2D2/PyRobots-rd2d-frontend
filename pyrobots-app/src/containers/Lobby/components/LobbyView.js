import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { Stack } from "@mui/system";
import SummarizeIcon from '@mui/icons-material/Summarize';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import styled from "styled-components";
import PyRobotsAppbar from "./Appbar.js";
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';


const IconContainer = styled.div`
  display: flex;
`;


const LobbyView = ({users, robots, name}) => {
  return [
    <PyRobotsAppbar></PyRobotsAppbar>,
      <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      key = {1}
      height = '500px'
      >
        <Stack> 
        <IconContainer> 
          <SummarizeIcon sx={{ height: '80px', width: '60px' }} style={{ color: "#1C8E40",marginRight: "14px"}}/>
          <Typography variant="h4" style={{fontWeight: "700",
            fontFamily: "Roboto",
            padding: "18px 0px"}}>
              Partida "{name}"
          </Typography>
        </IconContainer>
          <List sx={{ width: "100%", maxWidth: 360, bgcolor: "white" }}>
          { users.map((user, index) => (
              <ListItem key = {user}>
                {/* el creador es rojo y tiene un ícono diferente */}
                <ListItemAvatar>
                <Avatar style={{ backgroundColor: users[0] === user ? "red" : "blue", fontSize: 40}}
                        sx={{ height: '50px', width: '50px' }}>
                  {users[0] === user 
                  ?
                  <Person4OutlinedIcon />
                  :
                  <SmartToyIcon />}
                </Avatar>
                
                </ListItemAvatar>
                <ListItemText primary={`${user}`}
                              primaryTypographyProps={
                                  { style: { fontSize: '1.4rem', fontFamily: "Roboto" } }}
                />
                <ListItemText secondary={`${robots[index]}`}
                              secondaryTypographyProps={
                                  { style: { fontSize: '1.1rem', fontFamily: "Roboto" } }}
                />
              </ListItem>
          ))}
          </List>
        </Stack> 
        </Box>
  ];
};

export default LobbyView;