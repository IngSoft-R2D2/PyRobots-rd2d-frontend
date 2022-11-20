import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Stack } from "@mui/system";
import SummarizeIcon from '@mui/icons-material/Summarize';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import styled from "styled-components";
import ButtonGroup from '@mui/material/ButtonGroup';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CreateIcon from '@mui/icons-material/Create';
import HomeIcon from '@mui/icons-material/Home';
import { makeStyles } from '@material-ui/core/styles';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    textAlign: 'left',
  },
}));

const IconContainer = styled.div`
  display: flex;
`;

const LobbyView = (props) => {
  const navigate = useNavigate();

  const goToHome= async() => {
      navigate("/home");
  }

  const goToMatchesList = async() => {
    navigate("/listmatches");
  }

  const goToMatchForm = async() => {
    navigate("/matches");
  }

  const classes = useStyles();

  return [

    <AppBar position="fixed" sx={{ background: 'dark-blue' }} 
        key = {0} >
        <Toolbar style={{display:'flex', justifyContent:"space-between", width:'100%'}}>
        
          <SmartToyIcon sx={{ fontSize: "80px" }} />
          <Typography variant="h3" 
                      component="div" 
                      style={{fontWeight: "700",
                        fontFamily: "Roboto",
                        padding: "18px 36px"}} 
                      className={classes.title}>
            PyRobots

          </Typography>
          <ButtonGroup variant="secondary" aria-label="outlined primary button group">
          <Button 
            style={{
              color: "#fff",
              fontSize: "22px"
            }}
            size="medium"
            variant="secondary"  
            startIcon={<CreateIcon  sx={{ fontSize: "large" }} /> }
            onClick={goToMatchForm}>
              crear partida
            </Button>
            <Button 
              style={{
                  color: "#fff",
                  fontSize: "22px"
                }}
                size="medium"
                variant="secondary"   
                startIcon={<FormatListBulletedIcon  sx={{ fontSize: "large" }} /> }
                onClick={goToMatchesList}>
              Ver partidas
              </Button>
              <Button 
                style={{
                  color: "#fff",
                  fontSize: "22px"
                }}
                variant="secondary" 
                startIcon={<HomeIcon  sx={{ fontSize: "large" }} /> } 
                onClick={goToHome} 
                sx={{ marginLeft: "auto"}}>
                Menú
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>,
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
              Información de partida: {props.name}
          </Typography>
        </IconContainer>
        <Typography 
        style={{fontWeight: "500",
        fontFamily: "Roboto",
        padding: "18px 0px"}}
        variant="h4" gutterBottom>
          jugadores
        </Typography>
          <List sx={{ width: "100%", maxWidth: 360, bgcolor: "white" }}>
          
          { props.users.map((value) => (
            //que el creador sea de color rojo
            (props.users[0] === value )
                ?
                <Stack> 
                <ListItem key={value}>
                  <ListItemAvatar>
                  <Avatar style={{ backgroundColor: "red" }}
                  sx={{ height: '50px', width: '50px' }}>
                    <Person4OutlinedIcon style={{ fontSize: 40 }}/>
                  </Avatar>
                  
                  </ListItemAvatar>
                  <ListItemText primary={`${value}`}
                  primaryTypographyProps={{ style: { fontSize: '1.4rem', fontFamily: "Roboto" } }}/>
                </ListItem>
                <Divider variant="inset" component="li" />
                </Stack> 
                :
              <Stack> 
              <ListItem key={value}>
                <ListItemAvatar>
                <Avatar style={{ backgroundColor: "blue" }}
                sx={{ height: '50px', width: '50px' }}>
                  <SmartToyIcon style={{ fontSize: 40 }}/>
                </Avatar>
                
                </ListItemAvatar>
                <ListItemText primary={`${value}`}
                primaryTypographyProps={{ style: { fontSize: '1.4rem', fontFamily: "Roboto" } }}/>
              </ListItem>
              <Divider variant="inset" component="li" />
              </Stack> 
            ))}

          </List>
        </Stack> 
        </Box>
  ];
};

export default LobbyView;