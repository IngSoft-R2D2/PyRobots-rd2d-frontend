import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MatchesList = () => {
    const navigate = useNavigate();
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:8000/matches");
            const content = await response.json();

            setMatches(content);
        })();
    });

    const returnHome = async() =>{
        navigate("/home");
      }

    return (
            <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Min jugadores</th>
                        <th scope="col">Max jugadores</th>
                        <th scope="col">Juegos</th>
                        <th scope="col">Rondas</th>
                    </tr>
                </thead>
                <tbody>
                    {matches.map(match => {
                        return <tr key={match.name}>
                            <td>{match.name}</td>
                            <td>{match.min}</td>
                            <td>{match.max}</td>
                            <td>{match.games}</td>
                            <td>{match.rounds}</td>
                        </tr>
                        
                    })}
                    
                </tbody>
            </table>

            <button onClick={returnHome}>regresar</button>
            </div>
    )
}

export default MatchesList;