import LobbyView from "./components/LobbyView.js";
import Results from "./components/Results.js"
import { useEffect, useState } from "react";

//importar los dos componentes de boton de abandonar y de iniciar
// en return poner uno u otro según si es el creador o no

const Lobby = (props) => {
  const ws = new WebSocket(`ws://127.0.0.1:8000/ws/${props.match_id}`);
  const [users, setUsers] = useState(["default", "hola"]);
  const [robots, setRobots] = useState(["defaultbot1", "altoRobo"]);
  const [results, setResults] = useState({started: false, res: []})

  useEffect(() => {
    if (results.started === false){
        ws.onopen = () => {
            console.log('WebSocket Client Connected');
        };
        ws.onmessage = (event) => {
        const json = JSON.parse(event.data);
        console.log(`[message] Data received from server: ${json}`);
        const evType = json.event;
        if (evType === "Join") {
            //agregar usuario a lista de users y su robot a lista robots
            const newuserList = users.concat(json.player);
            const newBotList = robots.concat(json.robot);
            setUsers(newuserList);
            setRobots(newBotList);
        }
        if (evType === "Leave") {
            //eliminar usuario de la lista de users y su robot de lista robots
            const newuserList = users.filter((item) => item !== json.player);
            const newBotList = robots.filter((item) => item !== json.robot);
            setUsers(newuserList);
            setRobots(newBotList);
        }
        if (evType === "Start"){
            setResults({started: true, res: []});
        }
        if (evType === "Results") {
            const listRes = json.participants;
            setResults({started: true, res: listRes});
        }
        };
    }
  });

  return (
    results.started
    ? 
        <Results results = {results.res}/>
    :
        <LobbyView users={users}
                   robots={robots} />
  );
};

export default Lobby;