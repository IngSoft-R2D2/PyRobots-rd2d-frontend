import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchToken } from './elements/Auth.js';
import RobotList from './components/RobotList.js';
import NoBotScreen from './components/NoBotScreen.js';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


const BotList = () => {

    const navigate = useNavigate();
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

    return( loading ?  
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
            >
            <CircularProgress color="inherit" />
        </Backdrop> : (
        (Object.keys(robots).length === 0) ? 
        <NoBotScreen/> :
        <RobotList robots = {robots}
                   />
    ))
}
export default BotList;
