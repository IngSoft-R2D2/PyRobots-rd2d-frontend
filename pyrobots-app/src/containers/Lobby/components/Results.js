import Typography from '@mui/material/Typography';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Stack } from "@mui/system";
import StarsIcon from '@mui/icons-material/Stars';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styled, { ThemeProvider } from "styled-components";
import ButtonGroup from '@mui/material/ButtonGroup';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CreateIcon from '@mui/icons-material/Create';
import HomeIcon from '@mui/icons-material/Home';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    textAlign: 'left',
  },
}));

const IconContainer = styled.div`
  display: flex;
`;

const Results = (props) => {
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
      alignItems="left"
      minHeight="18vh"
      key = {1}
      >
      <Stack direction="row" alignItems="center" gap={1} >
        <CheckCircleIcon style={{ color: "#1C8E40"}}/>
        <Typography variant="h5" style={{fontWeight: "700",
        fontFamily: "Roboto",
        padding: "18px 0px"}}>Partida finalizada!</Typography>
      </Stack>
      </Box>
       ,
        <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="left"
        minHeight="25vh"
        key = {2}
        >
          <Stack>

          
        <Typography variant="h6" gutterBottom
        style={{fontWeight: "500",
        fontFamily: "Roboto",
        padding: "20px 36px"}}>
          {`Ganador/es `}
        </Typography>
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "white" }}>
          {props.results.map((value) => (
            <Stack> 
              <ListItem>
              <ListItemAvatar>
              <Avatar style={{ backgroundColor: "#ff6f00" }}
              sx={{ height: '20px', width: '20px' }}>
                <StarsIcon style={{ fontSize: 20 }}/>
              </Avatar>
              </ListItemAvatar>
              <ListItemText primary={`${value.user_name}`} 
              primaryTypographyProps={{ style: { fontSize: '1rem', fontFamily: "Roboto" } }}/>
              </ListItem>
              <Divider variant="inset" component="li" />
              </Stack>
          ))}
        </List>
        </Stack>
        </Box>
  ];
}

export default Results;