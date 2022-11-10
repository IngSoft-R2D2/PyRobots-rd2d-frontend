import * as React from 'react';
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchToken } from './elements/Auth.js';
import MatchTable from './components/match_table.js';
import Button from '@mui/material/Button';

  
  export default function MatchesList() {
    const token = fetchToken();
    const [data_join, setMatchesJoin] = useState([]);
    const [data_mine, setMatchesMine] = useState([]);
    const navigate = useNavigate();

    const goMyMatches= async() => {
      navigate("/mymatches");
  }
    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:8000/matches/join", {
                method: "GET",
                headers: { 'accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`}})
            const content = await response.json();
            setMatchesJoin(content);
        })();
    }, []);

    useEffect(() => {
      (async () => {
          const response = await fetch("http://localhost:8000/matches/begin", {
              method: "GET",
              headers: { 'accept': 'application/json',
                          'Content-Type': 'application/json',
                          'Authorization': `Bearer ${token}`}})
          const content = await response.json();
          setMatchesMine(content);
      })();
  }, []);


    var matches_join = [];
    for(var i in data_join)
        matches_join.push([(data_join [i].name), 
         (JSON.stringify(data_join [i].users_robots))
          .replace(/[{}]/g, '').replace(/[""]/g, '')
          .replace(/[":"]/g, ':  ')]);

    var matches_mine = [];
    for(var i in data_mine)
        matches_mine.push([(data_mine [i].name),
        (JSON.stringify(data_mine [i].users_robots))
        .replace(/[{}]/g, '').replace(/[""]/g, '')
        .replace(/[":"]/g, ':  ')]);

    return (
        <Stack
        spacing={2}>
          
          <MatchTable matches_join = {matches_join} matches_mine = {matches_mine} mode = {"join"}/>
          {/* <Button variant="contained" size="small"
                onClick={goMyMatches} > Ver Partidas
          </Button> */}
        </Stack>
    )
  }