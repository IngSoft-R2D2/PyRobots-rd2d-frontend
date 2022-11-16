import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchToken } from './elements/Auth.js';
import SimForm from './components/SimForm.js';
import NoBotSimScreen from './components/NoBotSimScreen.js';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


const Simulation = () => {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        robot_id1:'',
        robot_id2:'',
        robot_id3:'',
        robot_id4:'',
        rounds: 1
    });

    const [robots, setRobots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [validForm, changeValidForm] = useState({valid: null });
    const [alertForm, changeAlertForm] = useState({field: "" });

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

    const onSubmit_newSim = async (event) => {
      event.preventDefault();
      const token = fetchToken();
      const robots_fetch = [parseInt(inputs.robot_id1),parseInt(inputs.robot_id2),
        parseInt(inputs.robot_id3),parseInt(inputs.robot_id4)]
      
      const robots_clean = robots_fetch.filter( value => !Number.isNaN(value) );
      
      try {
        const result = await fetch('http://localhost:8000/simulation', {
          method: 'POST',
          headers: {'accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` },
          body: JSON.stringify({
              robots_id: robots_clean,
              number_of_rounds: parseInt(inputs.rounds),
          })
        })
        if(result.ok){
            changeValidForm(true);
            changeAlertForm("Simulacion creada exitosamente");
            setTimeout(() => {
            navigate('/Board') // en realidad a board
            }, 5000);
        }
        else{
            changeValidForm(false);
            changeAlertForm("error");
        }
      }
      
      catch(error) {
          alert(error);
      };
      // no deberia hacer esto, deberia esperar la respuesta
    }

    return( loading ?  
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
            >
            <CircularProgress color="inherit" />
        </Backdrop> : (
        (Object.keys(robots).length === 0) ? 
        <NoBotSimScreen/> :
        <SimForm onSubmit = {onSubmit_newSim}
                   inputs = {inputs}
                   robots = {robots}
                   validForm = {validForm}
                   alertForm = {alertForm}
                   setInputs = {setInputs}/>
    ))
}
export default Simulation;