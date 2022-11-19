import Board from "./Board.js"
import { useState, useEffect } from 'react';


const Animation = (props) => {
    const json = props.json; 
    
    const obj = Object.values(json["simulation_json"]); 
    const [index, setIndex] = useState(0); 
    const [finished,setFinished] = useState(false) 

    const animation = () => {
      if (index<obj.length-1){
        setIndex ((index) => index + 1);
        console.log(index);
      }
      else{
        setFinished(true); 
      }  
    }

    useEffect(() => {
      const interval = setInterval(animation,50);
      return () => clearInterval(interval); 
    })
    

    return(
    <Board finished = {finished} round = {obj[index]}/>)
}

export default Animation; 

