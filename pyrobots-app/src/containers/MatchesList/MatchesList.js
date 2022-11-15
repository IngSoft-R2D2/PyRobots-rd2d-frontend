import * as React from 'react';
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchToken } from './elements/Auth.js';
import MatchTable from './components/match_table.js';
import Button from '@mui/material/Button';

export default function MatchesList() {
    const token = fetchToken();
    const [data, setMatches] = useState([]);
    const navigate = useNavigate();

    const goMyMatches= async() => {
      navigate("/mymatches");
  }
    useEffect(() => {
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

    // var matches = [];
    // var json = [];
    // for(var i in data)
    //     // var robots = JSON.stringify(data [i].users_robots)
    //     // robots = robots.replace(/[{}]/g, '');
    //     // robots = robots.replace(/[""]/g, '');
    //     // robots = robots.replace(/[":"]/g, ':  ');
    //     matches.push([(data [i].name),JSON.stringify(data [i].users_robots),(data [i].id)]);

    // for(var j in data)
    // json.push([(data [j].id)]);

    return (
        <Stack
        spacing={2}>
          
          <MatchTable matches={data}/>
          <Button variant="contained" size="small"
                onClick={goMyMatches} > Ver Partidas Iniciables
          </Button>
        </Stack>
    )
  }