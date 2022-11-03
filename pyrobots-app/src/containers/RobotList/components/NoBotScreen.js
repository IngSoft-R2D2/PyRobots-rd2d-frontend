import { Alert,Button,ButtonGroup,Box } from '@mui/material';
import { AlertTitle } from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import UndoIcon from '@mui/icons-material/Undo';
import { Stack } from "@mui/system";
import { useNavigate } from 'react-router-dom';


const NoBotScreen = () => {
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
                <AlertTitle>No se pueden listar tus robots</AlertTitle>
                Para listarlos debes tener al menos un robot
            </Alert> 
            <Button variant="contained" size="large" endIcon={<UndoIcon fontSize="large"/> } 
                onClick={goBack} > Volver atras 
            </Button>
            <Button variant="contained" size="large" endIcon={<SmartToyIcon fontSize="large"/> } 
            onClick={goToRobot} > Crear robot
            </Button>
        </Stack> 
)};
export default NoBotScreen;