import { Alert,Button,ButtonGroup,Box } from '@mui/material';
import { AlertTitle } from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import UndoIcon from '@mui/icons-material/Undo';
import { Stack } from "@mui/system";
import { useNavigate } from 'react-router-dom';


const NoBotSimScreen = () => {
    const navigate = useNavigate();
    const goBack= async() => {
        navigate("/home");
    }
    const goToRobot= async() => {
        navigate("/robots");
    }
    return(
        <Stack
            spacing={2}
            >
            <Alert severity="error"
                style={{
                padding: "18px 36px",
                }}>
                <AlertTitle>No se puede crear simulacion</AlertTitle>
                Para crear una simulacion debes tener al menos dos robots
            </Alert> 
            <Button variant="contained" size="large" endIcon={<UndoIcon fontSize="large"/> } 
                onClick={goBack} > Volver atras 
            </Button>
            <Button variant="contained" size="large" endIcon={<SmartToyIcon fontSize="large"/> } 
            onClick={goToRobot} > Crear robot
            </Button>
        </Stack> 
)};
export default NoBotSimScreen;