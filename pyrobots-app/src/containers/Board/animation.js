import Board from "./Board.js"
import FinishBoard from "./FinishBoard.js"

import { useState, useEffect } from 'react';


const Animation = (props) => {
    const json = props.json; 
    
    const obj = Object.values(json["simulation_json"]); 
    const [index, setIndex] = useState(0); 
    const [finished,setFinished] = useState(false) 

    useEffect(() => {
      const interval = setInterval(function(){
        if (index<obj.length-1){
          setIndex ((index) => index + 1);
        }
        else{
          setFinished(true); 
          clearInterval(interval)
        }  
      },50);
      return () => clearInterval(interval); 
    })
    return(
    finished 
    ? <FinishBoard  round = {obj[index]} cant={index}/>
    : <Board finished = {finished} round = {obj[index]} />)
}

export default Animation; 

