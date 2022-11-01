import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchToken } from './elements/Auth.js';



function createData(
    name,
    calories,
    fat,
    carbs,
    protein
  ) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
  export default function MatchesList() {
    // const token = fetchToken();
    // const [matches, setMatches] = useState([]);
    // useEffect(() => {
    //     (async () => {
    //         const response = await fetch("http://localhost:8000/matches/join", {
    //             method: "GET",
    //             headers: { 'accept': 'application/json',
    //                         'Content-Type': 'application/json',
    //                         'Authorization': `Bearer ${token}`}})
    //         const content = await response.json();
    //         setMatches(content);
    //     })();
    // });
    const data={

        "match_1": {
          "id": 1,                     // match id
          "name": "NNKERL",            // match name
          "min_players": 2,
          "max_players": 4,
          "number_of_games": 34,
          "number_of_rounds": 1345,
          "password": "secret",
          "is_finished": false,
          "creator": 1,               // creator user id
          "users_robots": {
            "nacho": "MEGATRON",
            "carlos": "ROBOT2"
          }
        },
      
          "match_2": {
              "id": 2,
              "name": "pool",
          "min_players": 8,
              "max_players": 10,
          "number_of_games": 125,
          "number_of_rounds": 1010,
          "password": "",
          "is_finished": false,
          "creator": 2,
          "users_robots": {
                  "ana":"MEGArobot"
              }
          },
      
          "match_3": {
                  "id": 3,
            "name": "NGBI",
            "min_players": 3,
            "max_players": 5,
            "number_of_games": 5,
            "number_of_rounds": 10,
            "password": "AGSV87NG4",
            "is_finished": false,
            "creator": 2,
            "users_robots": {
                      "ana":"Roboto090"
                  }
              },
      
          "match_4": {
                  "id": 4,
            "name": "KGN",
            "min_players": 3,
            "max_players": 5,
            "number_of_games": 5,
            "number_of_rounds": 10,
            "password": "",
            "is_finished": false,
            "creator": 3,
            "users_robots": {
                      "angelescch":"R2D2"
                  }
              }
      
      }
    var matches = [];

    for(var i in data)
        // var robots = JSON.stringify(data [i].users_robots)
        // robots = robots.replace(/[{}]/g, '');
        // robots = robots.replace(/[""]/g, '');
        // robots = robots.replace(/[":"]/g, ':  ');
        matches.push([(data [i].name),JSON.stringify(data [i].users_robots)]);
        
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">Participantes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {matches.map((match) => (
                <TableRow
                key={"sdfs"}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {match[0]}
                </TableCell>
                <TableCell align="right">{match[1]}</TableCell>
                <TableCell align="right">{<Button variant="contained">Unirse</Button>}
                </TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
