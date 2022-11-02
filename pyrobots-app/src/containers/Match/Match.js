import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchToken } from './elements/Auth.js';
import MatchForm from './components/MatchForm.js';
import NoBotScreen from './components/NoBotScreen.js';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Match = () => {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        name: '',
        robot_id:1,
        pwd: '',
        min: 2,
        max: 2,
        games: 1,
        rounds: 1
    });

    const [robots, setRobots] = useState([]);
    const [loading, setLoading] = useState(true);

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
      .catch(function (error) {
          //console.log(error, 'error')
          alert(error);
      });
      console.log(result);
      navigate("/home");
    }

    return( loading ?  
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
            >
            <CircularProgress color="inherit" />
        </Backdrop> : (
        (Object.keys(robots).length === 0) ? 
        <NoBotScreen/> :
        <MatchForm onSubmit = {onSubmit_newMatch}
                   inputs = {inputs}
                   robots = {robots}
                   setInputs = {setInputs}/>
    ))
}
export default Match;
