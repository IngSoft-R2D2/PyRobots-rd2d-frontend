import React, { useEffect,useState } from 'react';
import { Stage, Layer, Circle, Rect, Text } from 'react-konva';

import './Board.css';


const FinishBoard = (props) => { 
    
  const ronda = props.round; 
  const cant = props.cant
  const array_ronda = Object.keys(ronda.Robots); 
  const colors = ["orange","blue","brown","green"]
  const [cant_robots,setCant] = useState([]); 

  // calculo cantidad de robots vivos a mostrar
  useEffect( () =>{
    // como le saco el warning? 
    const cant_rob = Object.keys(ronda.Robots).filter((robot)=> ronda.Robots[robot].damage<100); 
    setCant(cant_rob)
  },[ronda.Robots])

  //funcion que dibuja los robots y su status en el juego
  const draw_Bots = (robot) => {
    if (ronda.Robots[robot].damage===100){
      return(
      [<Text 
        fontFamily={'Roboto'}
        fill = {colors[array_ronda.indexOf(robot)]}
        x={ronda.Robots[robot].position[0]/2+40} 
        y={ronda.Robots[robot].position[1]/2+50} 
        fontSize={20} 
        text = {"X"}
        key={"bot:"+robot}/>,
      ]
        )
    }
    else if (ronda.Robots[robot].damage<100){
      return[
      <Circle 
        x={ronda.Robots[robot].position[0]/2+40} 
        y={ronda.Robots[robot].position[1]/2+60} 
        radius={10} 
        fill={colors[array_ronda.indexOf(robot)]} 
        stroke="black" 
        key={"bot:"+robot} />,
      <Text 
        fontFamily={'Roboto'}
        fill = {colors[array_ronda.indexOf(robot)]}
        x={600} 
        y={80*cant_robots.indexOf(robot)+280} 
        fontSize={40} 
        text = {robot.substring(3)+' | vida restante: '+ (100-ronda.Robots[robot].damage)+'%'} 
        key={"life:"+robot}/>,
      ]
    }
  }
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Rect
            x={30}
            y={50}
            width={530}
            height={520}
            fill= "rgb(68, 189, 92)"
            shadowBlur={10}
          />
          {/* robots muertos o vivos */}
          {Object.keys(ronda.Robots).map(draw_Bots)}
          <Text 
                fontFamily={'Roboto'}
                x={600} 
                y={50} 
                fontSize={40} 
                text = {"Simulacion terminada!"
                +"\n\ncantidad de rondas jugadas: "+(cant+1)
                +"\n\nrobots ganadores: "} />  
        </Layer>
    </Stage>);
}
 
export default FinishBoard;
