import * as React from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchToken } from './elements/Auth.js';
import { PaginationTable } from './components/PaginationTable.js'
  
  export default function MatchesList() {
    const navigate = useNavigate();

    const token = fetchToken();
    const [matches, setMatches] = useState([]);
    const getData = async () => {
          const response = await fetch("http://localhost:8000/matches/join", {
              method: "GET",
              headers: { 'accept': 'application/json',
                          'Content-Type': 'application/json',
                          'Authorization': `Bearer ${token}`}})
          const content = await response.json();
          setMatches(content);
        };

    const columns = () => [
      {
        Header: "Nombre",
        accessor: "name"
      },
      {
        Header: "Dueño",
        accessor: "creator" //habría que cambiarlo por el nombre del user
      },
      {
        Header: "Lugares libres",
        accessor: "max_players" //habría que cambiarlo por cuantos jugadores pueden unirse (por el momento inconseguible)
      }
    ]

    useEffect(() => {
      getData();
    }, []);

    const data = JSON.parse(matches);

    const goBack = async() => {navigate("/home")};
        
    return (
      <div>
        <>{<PaginationTable columns={columns} data={data} />}</>
        <button onClick={goBack}>regresar</button>
      </div>
    );
  }