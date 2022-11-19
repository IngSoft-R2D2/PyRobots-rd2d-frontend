import React from "react";
import List from '@material-ui/core/List';
import { ListItem, ListItemText } from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Typography }  from "@mui/material";
import Box from '@mui/material/Box';
import { Avatar, Button }  from "@mui/material";
import UndoIcon from '@mui/icons-material/Undo';
import { Stack } from "@mui/system";
import { useNavigate } from 'react-router-dom';


const RobotList = (props) => {
    const robots = props.robots;  
    const navigate = useNavigate();
    const goBack= async() => {
        navigate("/home");
    }

    return (
    <Stack
        spacing={2}
        >
    <Box sx={{ flexGrow: 1, width: 1000}}
    border={4}
    borderColor="black"
    background = "lightblue"
    style={{
        color: "#000",
        padding: "18px 36px",
        fontSize: "50px",
        background: "lightblue",
      }}    >
        <Typography sx={{ mt: 4, mb: 2 }} variant="h3" component="div">
            Robots
        </Typography>
        <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        aria-label="robots"
        >
        {Object.keys(robots).map((key) => (
                <ListItem key={key}
                name = {robots[key].name}
                style={{
                    padding: "18px 36px",
                    background: "lightblue",
                  }}>
                    <ListItemIcon>
                    <Avatar sx={{ bgcolor: 'blue'}}>
                      <SmartToyIcon  />
                    </Avatar>
                    </ListItemIcon>
                     <ListItemText primary={robots[key].name}
                     primaryTypographyProps={{fontSize: '35px'}} />
                </ListItem>
            ))
        }
        </List>
    </Box>
    <Button variant="contained" size="large" endIcon={<UndoIcon fontSize="large"/> } 
    onClick={goBack} > Volver atras 
    </Button>
    </Stack>
    )
}

export default RobotList; 