import LobbyView from "./components/LobbyView.js";
import Results from "./components/Results.js"
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom"
import { useLocation } from 'react-router-dom'
import ButtonStart from "./components/ButtonStart.js"
import ButtonLeave from "./components/ButtonLeave.js"
import { fetchToken } from "../Commons/Auth.js";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Lobby = () => {
  const { match_id } = useParams();
  const location = useLocation();
  const m = location.state;
  const user_id = m.user_id;
  const user_is_creator = m.user_is_creator;
  const match_name = m.match_name;
  const ws = useRef(null);
  const [match, setMatch] = useState([]);
  const [users, setUsers] = useState([]);
  const [robots, setRobots] = useState([]);
  const [results, setResults] = useState({ started: false, res:[]});
  const [loading, setLoading] = useState(true);

  //obtener la partida correspondiente de la lista de partidas
  useEffect(() => {
    const token = fetchToken();
    (async () => {
        const response = await fetch("http://localhost:8000/matches", {
            method: "GET",
            headers: { 'accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`}})
        const content = await response.json();
        const this_match = Object.values(content).filter(match => match.id === parseInt(match_id));
        setMatch(this_match);
    })();
  }, [match_id]);

  //setear lista de users y robots
  useEffect(() => {
    if(match.length > 0){
      Object.keys(match[0].players).forEach((player) => 
      {if (!users.includes(player)){
      users.push(player)
      robots.push(match[0].players[player].robot_name);

      setLoading(false);
      }});
    }
    // eslint-disable-next-line
  }, [match])

  useEffect(() => {
    if (results.started === false){
        const socket = new WebSocket(`ws://127.0.0.1:8000/match/${match_id}/user/${user_id}`);
        ws.current = socket;
        ws.current.onopen = () => {
            console.log('WebSocket Client Connected');
        };
    }
    if (ws.current !== null){ //cuando termina la partida mientras estoy en el lobby
        ws.current.onclose = () => {
            console.log('WebSocket Client Desconnected');
        };
    }
    return (() => {
        if (ws.current !==null){ //cuando salgo del lobby si no terminó la partida
            ws.current.close();
            console.log('WebSocket Client Desconnected return');
        }
    })
  },[results, match_id, user_id])

  useEffect(() => {
    if(ws.current !==null && results.started === false){
        ws.current.onmessage = (event) => {
            const json = JSON.parse(event.data);
            console.log(`message: ${json.event}`);
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
},[users, robots, results]);

  return (
    results.started
    ? 
      <Results results = {results.res}/>
    : loading
        ?
          <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={loading}
          >
              <CircularProgress color="inherit" />
          </Backdrop> 
        : user_is_creator
            ?
            <div>
                <LobbyView
                    users={users}
                    robots={robots}
                    name={match_name}/>
                <ButtonStart 
                    match_id={match_id}
                    number_of_participants={users.length} />
            </div>
            :
            <div>
                <LobbyView 
                    users={users}
                    robots={robots}
                    name={match_name}/>
                <ButtonLeave match_id={match_id}/>
            </div>
  );
};

export default Lobby;