import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchToken } from '../Commons/Auth.js';
import MatchForm from './components/MatchForm.js';
import NoBotScreen from './components/NoBotScreen.js';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Match = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        name: '',
        robot_id:'',
        pwd: '',
        min: 2,
        max: 2,
        games: 1,
        rounds: 1
    });
    const [robots, setRobots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [validForm, changeValidForm] = useState({valid: null });
    const [alertForm, changeAlertForm] = useState("");

    useEffect(() => { 
        const token = fetchToken();
        fetch(`http://localhost:8000/robots`,{
            method: "GET",
            headers: {'accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` },
        })
         .then((response) => response.json())
         .then ((data)=> {
            setRobots(data);
            setLoading(false);
         })
         .catch((err) => {
            console.log(err.message);
         });
       }, []);

    const onSubmit_newMatch = async (event) => {
      event.preventDefault();
      const token = fetchToken();
      
      try{
        const result = await fetch('http://localhost:8000/matches', {
            method: 'POST',
            headers: {'accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` },
            body: JSON.stringify({
                name: inputs.name,
                robot_id: parseInt(inputs.robot_id),
                max_players: inputs.max,
                min_players: inputs.min,
                number_of_games: inputs.games,
                number_of_rounds: inputs.rounds,
                password: inputs.pwd,
            })
        })
        const data = await result.json();
        if(result.ok){
            changeValidForm(true);
            changeAlertForm("Partida creada exitosamente");
            setTimeout(() => {
            navigate('/home')
            }, 2000);
        }
        else{
            changeValidForm(false);
            if (data.detail === "This user has a match with this name already."){
                changeAlertForm("Ya creaste una partida con este nombre!");
            }
            if (data.detail === "Invalid maximum number of players."){
                changeAlertForm("Inválido valor máximo de jugadores");
            }
            if (data.detail === "Invalid minimum number of players."){
                changeAlertForm("Inválido valor mínimo de jugadores");
            }
            if (data.detail === "Minimum number of players must not be greater than the maximun number of players."){
                changeAlertForm("Mínima cantidad de jugadores no puede ser mayor que la máxima cantidad de jugadores");
            }
            if (data.detail === "Invalid number of rounds."){
                changeAlertForm("Valor inválido de rondas");
            }
            if (data.detail === "Invalid number of games."){
                changeAlertForm("Valor inválido de juegos");
            }
        }
      }
      catch(error) {
          alert(error);
      };
    }
    return( 
    loading 
    ?
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
        >
            <CircularProgress color="inherit" />
        </Backdrop> 
    :
        ((Object.keys(robots).length === 0) ? 
        <NoBotScreen/> :
        <MatchForm onSubmit = {onSubmit_newMatch}
                inputs = {inputs}
                setInputs = {setInputs}
                robots = {robots}
                validForm = {validForm}
                alertForm = {alertForm}
        />)
    )
}
export default Match;
