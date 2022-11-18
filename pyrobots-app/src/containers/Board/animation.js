import Board from "./Board.js"
import { useState, useEffect } from 'react';


const Animation = (props) => {
    const json = props.json; 
    //const json = simulation_json; 
    
    const obj = Object.values(json["simulation_json"]); 
    const [index, setIndex] = useState(0); //frame
    const [finished,setFinished] = useState(false) 

    // useEffect(() => {
    //   intervalRef.current = getInterval()
    //   return () => clearInterval(intervalRef.current);
    // });

    // const getInterval = () => {
    //   const progressInterval = setInterval(() => {
    //     if (index<obj.length-1){
    //       setIndex ((index) => index + 1);
    //     } 
    //   }, 500);
    //   console.log(obj.length);
    //   console.log(index); 
    //   return progressInterval; 
    // }

    const animation = () => {
      if (index<obj.length-1){
        setIndex ((index) => index + 1);
      }
      else{
        setFinished(true); 
      }  
    }

    useEffect(() => {
      const interval = setInterval(animation,80);
      return () => clearInterval(interval); 
    })
    // console.log(obj[1])
    // return renderFrame(frame)
    return(
    <Board finished = {finished} round = {obj[index]}/>)
    // por alguna extrania razon del universo esto funciona!!!! :D 
}

export default Animation; 

