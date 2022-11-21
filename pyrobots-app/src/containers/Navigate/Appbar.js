import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import Typography from '@mui/material/Typography';

const PyRobotsAppbar = () => {

    return (
      <AppBar position="fixed" sx={{ background: 'dark-blue' }}>
        <Toolbar >
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
        </Toolbar>
      </AppBar>
    );
};

export default PyRobotsAppbar;