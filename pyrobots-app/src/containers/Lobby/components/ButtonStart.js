import * as React from 'react';
import PlayCircleFilledWhiteIcon from 
'@mui/icons-material/PlayCircleFilledWhite';
import Button from '@mui/material/Button';
import { fetchToken } from '../../Bot/elements/Auth.js';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { Alert,
    Box } from '@mui/material';
import { Stack } from "@mui/system";

const theme = createTheme({
    palette: {
      start: {
        light: '#6fbf73',
        main: '#4caf50',
        dark: '#357a38',
        contrastText: '#000',
      },
    },
  });

const ButtonStart = (props) => {
    const number_of_participants = props.number_of_participants
    const match_id = props.match_id
    const startMatch = async() => {
        const token = fetchToken();
        try{
                const response = await fetch(`http://localhost:8000/matches/start/${match_id}`, {
                method: "PUT",
                headers: { "accept": "application/json",
                            'Authorization': `Bearer ${token}`},
                body: JSON.stringify({})
                })
            const data = await response.json();
            if(response.ok){
                alert("Partida iniciada exitosamente")
            }
            else {
                alert(data.detail)
            }
        }catch(error){
            alert(error)
        }
    }
    return(
        (number_of_participants>= 2 && number_of_participants <= 4)
        ?
        <ThemeProvider theme={theme}>
            <Button 
                color="start" 
                variant="outlined" size="medium"
                endIcon={<PlayCircleFilledWhiteIcon sx={{ fontSize: "large" }} /> }
                onClick={startMatch} > 
                Iniciar
            </Button>
        </ThemeProvider>
        :
        <Stack spacing={2}>
        <ThemeProvider theme={theme} >
        <Box textAlign='center'>
        <Button 
            disabled
            color="start" 
            variant="outlined" size="medium"
            endIcon={<PlayCircleFilledWhiteIcon sx={{ fontSize: "large" }} /> }
            onClick={startMatch} 
            style={{marginTop: '40px',maxWidth: '100px', maxHeight: '50px', minWidth: '30px', minHeight: '30px'}}> 
            Iniciar
        </Button>
        </Box>
        <Alert variant="filled" severity="warning">
            Esperá a que se una un jugador más para poder iniciar la partida
        </Alert>
    </ThemeProvider>
    </Stack>
    )
}

export default ButtonStart;