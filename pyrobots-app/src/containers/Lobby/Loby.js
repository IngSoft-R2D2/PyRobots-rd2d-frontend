import LobbyView from "./components/LobbyView.js";
import Results from "./components/Results.js"
import { useEffect, useState } from "react";

//importar los dos componentes de boton de abandonar y de iniciar
// en return poner uno u otro según si es el creador o no

const Lobby = (props) => {
  const ws = new WebSocket(`ws://localhost:3000/matches/${props.match_id}`);
  const [users, setUsers] = useState(["default", "hola"]);
  const [robots, setRobots] = useState(["defaultbot1", "altoRobo"]);
  const [results, setResults] = useState({finish: false, winner: ["jose"]})
//para ver quien es el creador solo fijarme el primero de la lista (creo)
//o sea simpre va a ser l primero en unirse

  useEffect(() => {
    if (results.finish === false){
        ws.onopen = () => {
            console.log('WebSocket Client Connected');
        };
        ws.onmessage = (event) => {
        const json = JSON.parse(event.data);
        console.log(`[message] Data received from server: ${json}`);
        const evType = json.event;
        if (evType === "join") {
            //agregar usuario a lista de users y su robot a lista robots
            const newuserList = users.concat(json.player);
            const newBotList = robots.concat(json.bot);
            setUsers(newuserList);
            setRobots(newBotList);
        }
        if (evType === "left") {
            //eliminar usuario de la lista de users y su robot de lista robots
            const newuserList = users.filter((item) => item !== json.player);
            const newBotList = robots.filter((item) => item !== json.bot);
            setUsers(newuserList);
            setRobots(newBotList);
        }
        if (evType === "finish") {
            //eliminar usuario de la lista de users y su robot de lista robots
            const winners = json.winners;
            setResults({finish: true, winner: winners});
        }
        };
    }
  });

  return (
    results.finish
    ? 
        <Results results = {results.winner}/>
    :
        <LobbyView users={users}
                   robots={robots} />
  );
};

export default Lobby;