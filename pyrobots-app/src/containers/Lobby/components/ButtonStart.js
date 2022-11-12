import * as React from 'react';
import PlayCircleFilledWhiteIcon from 
'@mui/icons-material/PlayCircleFilledWhite';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { fetchToken } from '../elements/Auth.js';
import { createTheme, ThemeProvider} from '@mui/material/styles';

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

const Start = (props) => {
    const navigate = useNavigate();
    const match_id = props.match_id
    const startMatch = async() => {
        const token = fetchToken();
        try{
                const response = await fetch("http://localhost:8000/matches/join/?id=${match_id}", {
                method: "PUT",
                headers: { "accept": "application/json",
                            'Authorization': `Bearer ${token}`},
                body: JSON.stringify({})
                })
            const data = await response.json();
            if(response.ok){
                alert("Partida iniciada exitosamente")
                // setTimeout(() => {
                // navigate('/lobby')
                // }, 4000);
            }
            else {
                alert(data.detail)
            }
        }catch(error){
            alert(error)
        }
    }
    return(
        <ThemeProvider theme={theme}>
            <Button 
                color="start" 
                variant="outlined" size="medium"
                endIcon={<PlayCircleFilledWhiteIcon sx={{ fontSize: "large" }} /> }
                onClick={startMatch} > 
                Iniciar
            </Button>
        </ThemeProvider>
    )
}

export default Start;