import * as React from 'react';
import StartIcon from '@mui/icons-material/Start';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { fetchToken } from '../elements/Auth.js';
import { createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
    palette: {
      join: {
        light: '#f28933',
        main: '#ef6c00',
        dark: '#a74b00',
        contrastText: '#fff',
      },
    },
  });

const Join = ({match_id, robot_id, players, user_id, is_creator, user_name, is_started}) => {
    const navigate = useNavigate();
    const joinMatch = async() => {
        const token = fetchToken();
        try{
                const response = await fetch(`http://localhost:8000/matches/join/${match_id}/robot/${robot_id}`, {
                method: "PUT",
                headers: { "accept": "application/json",
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`},
                body: JSON.stringify({})
                })
            const data = await response.json();
            if(response.ok){
                alert("Unido a la partida exitosamente")
                navigate(`/listmatches/lobby/${match_id}`,
                             {state: {players: players,
                                      id: user_id,
                                      is_creator: is_creator, 
                                      new_player: user_name,
                                      is_started: is_started}}) 
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
                color="join"
                variant="contained" size="medium"
                endIcon={<StartIcon sx={{ fontSize: "large" }} /> }
                onClick={joinMatch} > 
                Unirse
            </Button>
        </ThemeProvider>
    )
}

export default Join;