import * as React from 'react';
import PlayCircleFilledWhiteIcon from 
'@mui/icons-material/PlayCircleFilledWhite';
import Button from '@mui/material/Button';

const Start = (props) => {
    /*const match_id = props.match_id
    const startMatch = async() => {
        try{
                const response = await fetch("http://localhost:8000/matches/start/${match_id}", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({})
                })
        const data = await response.json();
        }catch(error){
            alert(error)
        }
    }*/
    return(
        <Button variant="contained" size="medium"
            endIcon={<PlayCircleFilledWhiteIcon sx={{ fontSize: "800px" }} /> }
            onClick={startMatch} > 
            Iniciar
        </Button>
    )
}

export default Start;