import { Alert, Button } from '@mui/material';
import { AlertTitle } from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import UndoIcon from '@mui/icons-material/Undo';
import { Stack } from "@mui/system";
import { useNavigate } from 'react-router-dom';


const NoBotScreenJoin = () => {
  const navigate = useNavigate();
  const goBack = async () => {
    navigate("/listmatches");
  }
  const goToRobot = async () => {
    navigate("/robots");
  }
  return (
    <Stack
      spacing={2}
      direction='column'
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
      <Alert 
        severity="error"
        color='info'
        variant='filled'
        style={{
          width:'385px',
          padding: "18px 36px",
        }}>
        <AlertTitle>No te puedes unir a una partida</AlertTitle>
        Para unirte debes tener al menos un robot
      </Alert>
      <Stack
        direction='row'
        spacing={4}
      >
        <Button variant="contained" size="large" endIcon={<UndoIcon fontSize="large" />}
          onClick={goBack} > Volver atras
        </Button>
        <Button variant="contained" size="large" endIcon={<SmartToyIcon fontSize="large" />}
          onClick={goToRobot} > Crear robot
        </Button>
      </Stack>
    </Stack>
  )
};
export default NoBotScreenJoin;