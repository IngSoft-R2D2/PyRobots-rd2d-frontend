import * as React from 'react';
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
import { fetchToken } from './elements/Auth.js';
import MatchTable from './components/match_table.js';

export default function MatchesList() {
    const [data, setMatches] = useState([]);
    //const navigate = useNavigate();

    useEffect(() => {
        const token = fetchToken();
        (async () => {
            const response = await fetch("http://localhost:8000/matches", {
                //endpoint de todas las partidas
                method: "GET",
                headers: { 'accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`}})
            const content = await response.json();
            console.log(content);
            setMatches(content);
        })();
    }, []);

    return (
        <Stack
        spacing={2}> 
          <MatchTable matches={data}/>
        </Stack>
    )
  }