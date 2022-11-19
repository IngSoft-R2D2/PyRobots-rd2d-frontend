import React from "react";
import List from '@material-ui/core/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import { ListItem, ListItemText } from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import { Avatar, Button, Container } from "@mui/material";
import UndoIcon from '@mui/icons-material/Undo';
import { Stack } from "@mui/system";
import { useNavigate } from 'react-router-dom';

import Collapse from "@material-ui/core/Collapse";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandableItem from "./expandableItem";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const RobotList = (props) => {
  const [open, setOpen] = React.useState(false);
  const robots = props.robots;
  const navigate = useNavigate();
  const goBack = async () => {
    navigate("/home");
  }
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Stack
      spacing={0}
      direction='row'
      style={{
        display: "flex",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        top: 0,
        left: 0
      }}
    >
      <Box sx={{ flexGrow: 1, width: 1000 }}
        border={4}
        borderColor="black"
        background="lightblue"
        style={{
          color: "#000",
          padding: "18px 36px",
          fontSize: "50px",
          background: "lightblue",
          marginLeft: "5%"
        }}
      >
        <Typography sx={{ mt: 4, mb: 2 }} variant="h3" component="div"
          style={{
            fontFamily: "Roboto"
          }}
        >
          Robots
        </Typography>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          aria-label="robots"
        >
          {Object.keys(robots).map((key) => (
            <ExpandableItem
              render={xprops => (
                <>
                  <ListItem
                    button onClick={() => xprops.setOpen(!xprops.open)}
                    key={key}
                    name={robots[key].name}
                    alignItems="flex"
                    style={{
                      padding: "18px 36px",
                      background: "lightblue",
                    }}
                  >
                    <ListItemIcon>
                      <Avatar sx={{ bgcolor: 'blue' }}>
                        <SmartToyIcon />
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText primary={robots[key].name}
                      primaryTypographyProps={{ fontSize: '35px' }} />
                  </ListItem>
                  <Collapse in={xprops.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItem>
                        <ListItemIcon>
                          <SentimentSatisfiedAltIcon 
                            variant="contained"
                            fontSize="large"
                            style={{
                              color:"blue"
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary={"Won Matches: " + robots[key].matches_won} />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <SentimentNeutralIcon
                            variant="contained"
                            fontSize="large"
                            style={{
                              color:"blue"
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary={"Tied Matches: " + robots[key].matches_tied} />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <SentimentVeryDissatisfiedIcon
                            variant="contained"
                            fontSize="large"
                            style={{
                              color:"blue"
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary={"Lost Matches: " + robots[key].matches_tied} />
                      </ListItem>
                    </List>
                  </Collapse>
                </>
              )}
            />
          ))
          }
        </List>
      </Box>
      <Button variant="contained" size="large" endIcon={<UndoIcon fontSize="large" />}
        onClick={goBack}
        style={{
          height: "100px",
          marginRight: "5%",
          marginLeft: "5%"
        }}>
        Volver atras
      </Button>
    </Stack>
  )
}

export default RobotList; 