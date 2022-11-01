import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchToken } from './elements/Auth.js';
import MatchForm from './components/MatchForm.js'

const Match = () => {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        name: '',
        pwd: '',
        min: 2,
        max: 2,
        games: 1,
        rounds: 1
    });

    const [robots, setRobots] = useState(null);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const token = fetchToken();
    //     fetch(`http://localhost:8000/robots`,{
    //         method: "GET",
    //         headers: {'accept': 'application/json',
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${token}` },
    //     })
    //      .then((response) => console.log(response));
    //    }, []);

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

    return(
        <MatchForm onSubmit = {onSubmit_newMatch}
                   inputs = {inputs}
                   setInputs = {setInputs}/>
    )

}

export default Match;
