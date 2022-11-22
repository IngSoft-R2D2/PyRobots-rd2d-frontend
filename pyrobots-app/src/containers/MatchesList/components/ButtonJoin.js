import * as React from 'react';
import StartIcon from '@mui/icons-material/Start';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { fetchToken } from '../../Commons/Auth.js';
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

const Join = ({match_id, robot_id, user_id, user_is_creator, creator_name, match_name, password}) => {
  const navigate = useNavigate();
  const joinMatch = async() => {
    const token = fetchToken();
    const body = (password===null) ? {} : {"password": password}
    try{
      const response = await fetch(`http://localhost:8000/matches/join/${match_id}/robot/${robot_id}`,
        {
          method: "PUT",
          headers: { "accept": "application/json",
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${token}`},
          body: JSON.stringify(body)
        })
      const data = await response.json();
      if (response.ok) {

        navigate(`/listmatches/lobby/${match_id}`,
                    {state: {user_id: user_id,
                     user_is_creator: user_is_creator,
                     match_name: match_name,
                    creator_name: creator_name}})
      }else {
          alert(data.detail)
      }
    }
    catch (error) {
      alert(error)
    }
  }

  return (
    <ThemeProvider theme={theme}>
    <Button 
        color="join"
        variant="contained" size="medium"
        endIcon={<StartIcon sx={{ fontSize: "large" }} /> }
        style={{
            borderRadius:"8px",
            fontSize: "20px",
            height:'90px',
            width:'135px'
        }}
        onClick={joinMatch} > 
        Unirse
    </Button>
    </ThemeProvider>
  )
}

export default Join;