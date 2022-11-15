import LobbyView from "./components/LobbyView.js";
import Results from "./components/Results.js"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

//importar los dos componentes de boton de abandonar y de iniciar
// en return poner uno u otro según si es el creador o no

const Lobby = (props) => {
  const { match_id } = useParams();
  const ws = new WebSocket(`ws://127.0.0.1:8000/ws/${match_id}`);
  const [users, setUsers] = useState(["default", "hola"]); // ["props.creatorname"] o algo así
  const [robots, setRobots] = useState(["defaultbot1", "altoRobo"]); // ["props.creatorbot"]
  const [results, setResults] = useState({
    started: false,
    res:
    [{
        'user_name': "Pepito", 
        'robot_name': "Megatron",
        'won_games': "45"
    }]
})

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
    else {
      ws.onclose = (event) => {
          ws.close();
      };
  }
}); //, [users, robots, results, ws]

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