import * as React from 'react';
import Button from '@mui/material/Button';
import DangerousIcon from '@mui/icons-material/Dangerous';

const Leave = (props) => {
    /*const match_id = props.match_id
    const joinMatch = async() => {
        try{
                const response = await fetch("http://localhost:8000/matches/join/${match_id}", {
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
            endIcon={<DangerousIcon sx={{ fontSize: "800px" }} /> }
            onClick={joinMatch} > 
            Iniciar
        </Button>
    )
}

export default Leave;