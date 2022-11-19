import LobbyView from "./components/LobbyView.js";
import Results from "./components/Results.js"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useLocation } from 'react-router-dom'
import ButtonStart from "./components/ButtonStart.js"
import ButtonLeave from "./components/ButtonLeave.js"

const Lobby = () => {
  const location = useLocation();
  const { match_id } = useParams();
  const user_id = location.state.id;
  const players = location.state.players;
  const is_creator = location.state.is_creator;
  const new_player = location.state.new_player;
  const is_started = location.state.is_started;

  const ws = new WebSocket(`ws://127.0.0.1:8000/match/${match_id}/user/${user_id}`);
  const [users, setUsers] = useState([]);
  const [robots, setRobots] = useState([]);
  const [results, setResults] = useState({ started: is_started, res:[]})

  //warning
  Object.keys(players).forEach((player) => 
  {if (!users.includes(player)){
    const newuserList = users.concat(player);
    setUsers(newuserList);
  }});

  useEffect(() => {
    if(new_player !== undefined && !users.includes(new_player)){
        const newuserList = users.concat(new_player);
        setUsers(newuserList);
    }
    console.log(results.started)
    if (results.started === false){
        ws.onopen = () => {
            console.log('WebSocket Client Connected');
        };
        ws.onmessage = (event) => {
        const json = JSON.parse(event.data);
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
      ws.onclose = () => {
          ws.close();
          console.log('WebSocket Client Desconnected');
      };
  }
},[users, robots, results, new_player]);

  return (
    results.started
    ? 
        <Results results = {results.res}/>
    : is_creator
        ?
      <div>
        <LobbyView users={users}
                   robots={robots} />
        <ButtonStart match_id={match_id} number_of_participants={users.length} />
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