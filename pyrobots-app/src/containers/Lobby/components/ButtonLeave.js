import * as React from 'react';
import DangerousIcon from '@mui/icons-material/Dangerous';
import { useNavigate } from 'react-router-dom';
import { fetchToken } from '../elements/Auth.js';
import Button from '@mui/material/Button';

import { createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
    palette: {
      leave: {
        light: '#ea605d',
        main: '#e53935',
        dark: '#a02725',
        contrastText: '#000',
      },
    },
  });

const Leave = (props) => {
    const navigate = useNavigate();
    const match_id = props.match_id
    const joinMatch = async() => {
        const token = fetchToken();
        try{
                const response = await fetch(`http://localhost:8000/matches/leave/${match_id}`, {
                method: "PUT",
                headers: { "accept": "application/json",
                            'Authorization': `Bearer ${token}`},
                body: JSON.stringify({})
                })
            const data = await response.json();
            if(response.ok){
                alert("Partida abandonada exitosamente")
                setTimeout(() => {
                navigate('/home')
                }, 4000);
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
                color= "leave"
                variant="outlined" size="large"
                endIcon={<DangerousIcon sx={{ fontSize: "large" }} /> }
                onClick={joinMatch} > 
                Abandonar partida
            </Button>
        </ThemeProvider>
    )
}

export default Leave;