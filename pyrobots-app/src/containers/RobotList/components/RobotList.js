import React from "react";
import List from '@material-ui/core/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import { AppBar, ListItem, ListItemText, Toolbar } from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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
        display: "flex-start",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        background: "white",
        top: 0,
        left: 0
      }}
    >
      <Box sx={{ flexGrow: 1, width: 1000 }}
        style={{
          color: "#000",
          padding: "18px 36px",
          fontSize: "50px",
          marginLeft: "5%"
        }}
      >
        <Typography sx={{ mt: 4, mb: 2 }} variant="h3" component="div"
          style={{
            color: "black",
            fontFamily: "Roboto"
          }}
        >
          Tus Robots
        </Typography>
        {Object.keys(robots).map((key) => (
          <ExpandableItem
            key={key}
            render={xprops => (
              <>
                <ListItem
                  key={key}
                  button onClick={() => xprops.setOpen(!xprops.open)}
                  name={robots[key].name}
                  alignItems="center"
                  style={{
                    border: "0px solid #2e2e2e",
                    borderRadius: "4px",
                    padding: "18px 36px",
                    background: "#1976d2",
                  }}
                >
                  <ListItemIcon>
                    <Avatar
                      sx={{
                        bgcolor: 'black',
                        border: '2px solid black'
                      }}
                    >
                      <SmartToyIcon />
                    </Avatar>
                  </ListItemIcon>
                  <ListItemText
                    primary={robots[key].name}
                    primaryTypographyProps={{
                      color: 'white',
                      fontSize: '35px'
                    }}
                  />
                  <ListItemIcon>
                    <KeyboardArrowDownIcon
                      variant="contained"
                      fontSize="large"
                      style={{
                        color: "white"
                      }}
                    />
                  </ListItemIcon>
                </ListItem>
                <Divider></Divider>
                <Collapse
                  border='20px'
                  in={xprops.open}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <ListItem
                      key={robots[key].matches_won}
                    >
                      <ListItemIcon>
                        <SentimentSatisfiedAltIcon
                          variant="contained"
                          fontSize="large"
                          style={{
                            color: "white"
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={"Partidas ganadas: " + robots[key].matches_won}
                        primaryTypographyProps={{
                          fontSize: "20px",
                          color: "black"
                        }}
                      />
                    </ListItem>
                    <Divider />
                    <ListItem
                      key={robots[key].matches_tied}
                    >
                      <ListItemIcon>
                        <SentimentNeutralIcon
                          variant="contained"
                          fontSize="large"
                          style={{
                            color: "white"
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={"Partidas empatadas: " + robots[key].matches_tied}
                        primaryTypographyProps={{
                          fontSize: "20px",
                          color: "black"
                        }}
                      />
                    </ListItem>
                    <Divider />
                    <ListItem
                      key={robots[key].matches_lost}
                    >
                      <ListItemIcon>
                        <SentimentVeryDissatisfiedIcon
                          variant="contained"
                          fontSize="large"
                          style={{
                            color: "white"
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={"Partidas perdidas: " + robots[key].matches_lost}
                        primaryTypographyProps={{
                          fontSize: "20px",
                          color: "black"
                        }}
                      />
                    </ListItem>
                  </List>
                </Collapse>
              </>
            )}
          />
        ))
        }
      </Box>
      <Button
        variant="contained"
        size="large"
        endIcon={<UndoIcon fontSize="large" />}
        onClick={goBack}
        style={{
          borderRadius: '4px',
          background: "#1976d2",
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