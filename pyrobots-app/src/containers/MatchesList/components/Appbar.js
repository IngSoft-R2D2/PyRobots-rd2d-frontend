import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ButtonGroup from '@mui/material/ButtonGroup';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';

const PyRobotsAppbar= (props) => {

    const navigate = useNavigate();

    const goToHome= async() => {
        navigate("/home");
        }
    
      const goToMatchForm = async() => {
        navigate("/matches");
      }
  
  return(
<AppBar position="fixed" sx={{ background: 'dark-blue' }} 
        key = {0} >
            <Toolbar style={{display:'flex', justifyContent:"space-between", width:'100%'}}>    
                <Box display='flex' flexGrow={1}>
                    <SmartToyIcon sx={{ fontSize: "80px" }} />
                    <Typography variant="h3" 
                                component="div" 
                                style={{fontWeight: "700",
                                fontFamily: "Roboto",
                                padding: "18px 36px"}} >
                    PyRobots
                    </Typography>
                </Box>  
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
                        variant="secondary" 
                        startIcon={<HomeIcon  sx={{ fontSize: "large" }} /> } 
                        onClick={goToHome} 
                        sx={{ marginLeft: "auto"}}>
                        Menú
                    </Button>
                </ButtonGroup>
            </Toolbar>
        </AppBar>
        );
};

export default PyRobotsAppbar;