import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';
//import IconButton from '@mui/material/IconButton';


//cambiar esto a una tabla y agregar los nombres de los robots
const LobbyView = (props) => {
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Lobby de partida 
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "lightblue" }}>
        {props.users.map((value) => (
          <ListItem
            sx={{
              color: "white"
            }}
            key={value}
            // disableGutters
            secondaryAction={
              //<IconButton aria-label="comment">
              // </IconButton>
              <div>
                <SentimentSatisfiedAltIcon />
                <SmartToyIcon />
              </div>
            }
          >
            <ListItemText primary={`jugador ${value}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default LobbyView;