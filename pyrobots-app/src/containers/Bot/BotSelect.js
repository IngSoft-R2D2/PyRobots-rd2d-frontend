// import React from "react";
import { useState, useEffect } from 'react';
import { fetchToken } from './elements/Auth.js'
import BotList from "./components/BotList.js";
import ButtonJoin from "../MatchesList/components/ButtonJoin.js"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import {useLocation} from 'react-router-dom'

const BotSelect = ()=> {
    
    const [loading, setLoading] = useState(true)
    const [robot, setRobot] = useState({robot_id:''})
    const [robots, setRobots] = useState([]);
    const location = useLocation();
    const match_id = location.state.m_id;

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

    return (
        loading ?  
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
            >
            <CircularProgress color="inherit" />
        </Backdrop> :
            <div>
                <BotList 
                robot = {robot}
                setRobot = {setRobot} 
                robots = {robots}
                />
                <ButtonJoin match_id={match_id} 
                            robot_id={robot.robot_id}
                            user_id= {location.state.user_id}
                            user_is_creator= {location.state.user_is_creator}
                            match_name= {location.state.match_name}
                />
            </div>
    )
}

export default BotSelect;