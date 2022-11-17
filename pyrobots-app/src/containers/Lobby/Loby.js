import LobbyView from "./components/LobbyView.js";
import Results from "./components/Results.js"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useLocation } from 'react-router-dom'
import ButtonStart from "./components/ButtonStart.js"
import ButtonLeave from "./components/ButtonLeave.js"

//importar los dos componentes de boton de abandonar y de iniciar
// en return poner uno u otro según si es el creador o no

const Lobby = () => {
  const location = useLocation();
  const { match_id } = useParams();
  const user_id = location.state.id;

  const ws = new WebSocket(`ws://127.0.0.1:8000/match/${match_id}/user/${user_id}`);
  const [users, setUsers] = useState([]);
  const [robots, setRobots] = useState([]);
  const [results, setResults] = useState({ started: false, res:[]})
  const players = location.state.players;
  const is_creator = location.state.is_creator;
  //agregar booleano

  //warning
  Object.keys(players).map((player) => 
  {if (!users.includes(player)){
    (users.push(player))
  }})

  useEffect(() => {
    if (results.started === false){
        ws.onopen = () => {
            console.log('WebSocket Client Connected');
        };
        ws.onmessage = (event) => {
        const json = JSON.parse(event.data);//event.data;//
        console.log(`[message] Data received from server: ${json}`);
        const evType = json.event;
        console.log(json.event);
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
},[users, robots, results]); //, [users, robots, results, ws]
console.log(results.started)
  return (
    results.started
    ? 
        <Results results = {results.res}/>
    : is_creator 
        ?
      <div>
        <LobbyView users={users}
                   robots={robots} />
        <ButtonStart match_id={match_id}/>
      </div>
        :
      <div>
        <LobbyView users={users}
                   robots={robots} />
        <ButtonLeave match_id={match_id}/>
      </div>
  );
};

export default Lobby;