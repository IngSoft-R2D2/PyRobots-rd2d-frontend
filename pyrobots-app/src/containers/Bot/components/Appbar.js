import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';

const PyRobotsAppbar = () => {
    const navigate = useNavigate();
    
    const goToHome= async() => {
        navigate("/home");
    }
    
    const goToRobotsList = async() => {
        navigate("/listrobots");
    }

    return (
        <AppBar position="fixed" sx={{ background: 'dark-blue' }} 
        key = {0} >
            <Toolbar style={{display:'flex', justifyContent:"space-between", width:'100%'}}>    
                <Box display='flex' flexGrow={1} key = {1}>
                    <SmartToyIcon sx={{ fontSize: "80px" }} />
                    <Typography variant="h3" 
                                component="div" 
                                style={{fontWeight: "700",
                                fontFamily: "Roboto",
                                padding: "18px 36px"}} >
                    PyRobots
                    </Typography>
                </Box>  
                <ButtonGroup  variant="secondary" aria-label="outlined primary button group">
                  <Button 
                        style={{
                            color: "#fff",
                            fontSize: "22px"
                        }}
                        size="medium"
                        variant="secondary"   
                        startIcon={<FormatListBulletedIcon  sx={{ fontSize: "large" }} /> }
                        onClick={goToRobotsList}
                        key = {2}>
                        Ver robots
                    </Button>
                    <Button 
                        style={{
                            color: "#fff",
                            fontSize: "22px"
                        }}
                        variant="secondary" 
                        startIcon={<HomeIcon  sx={{ fontSize: "large" }} /> } 
                        onClick={goToHome} 
                        sx={{ marginLeft: "auto"}}
                        key = {3}>
                        Menú
                    </Button>
                </ButtonGroup>
            </Toolbar>
        </AppBar>
    );
};

export default PyRobotsAppbar;