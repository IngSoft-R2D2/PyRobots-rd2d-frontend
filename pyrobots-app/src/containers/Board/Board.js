import React from 'react';
import { Stage, Layer, Circle, Rect, Text } from 'react-konva';

import './Board.css';


const Board = (props) => { 
  const ronda = props.round; 
  const finished = props.finished; 
  const array_ronda = Object.keys(ronda.Robots); 
  const colors = ["orange","blue","brown","green"]
  
  //funcion que dibuja los misiles
  const drawMissiles = (misil) => {
    if(!finished && ronda.Missiles[misil].missile_status){
      return(
      <Circle 
        x={ronda.Missiles[misil].missile_position[0]/2+40} 
        y={ronda.Missiles[misil].missile_position[1]/2+60} 
        radius={15} 
        fill="rgb(68, 189, 92)" 
        stroke="red"
        key={"misil:"+misil} />)
    }
    else if (!finished && !ronda.Missiles[misil].missile_status){
      return(
      <Circle 
        x={ronda.Missiles[misil].missile_position[0]/2+40} 
        y={ronda.Missiles[misil].missile_position[1]/2+60} 
        radius={5} 
        fill="grey" 
        stroke="black"
        key={"misil:"+misil} />)
    }
  }

  //funcion que dibuja los robots y su status en el juego
  const draw_Bots_status = (robot) => {
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
      <Text 
        fontFamily={'Roboto'}
        fill = {colors[array_ronda.indexOf(robot)]}
        x={600} 
        y={130*array_ronda.indexOf(robot)+50} 
        fontSize={40} 
        text = {"Robot: "+robot.substring(3)+'\n\nvida: '+ (100-ronda.Robots[robot].damage)+'%'} 
        key={"life:"+robot}/>,
      <Rect 
        key={robot}
        x={800} 
        y={130*array_ronda.indexOf(robot)+120}   
        width={500-5*ronda.Robots[robot].damage}
        height={50}
        fill= "green"
        />  
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
        y={130*array_ronda.indexOf(robot)+50} 
        fontSize={40} 
        text = {"Robot: "+robot.substring(3)+'\n\nvida: '+ (100-ronda.Robots[robot].damage)+'%'} 
        key={"life:"+robot}/>,
      <Rect 
        key={robot}
        x={800} 
        y={130*array_ronda.indexOf(robot)+120}   
        width={500-5*ronda.Robots[robot].damage}
        height={50}
        fill= "green"
        />  
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
          {/* misiles */}
          {Object.keys(ronda.Missiles).map(drawMissiles)}
          {/* robots muertos o vivos */}
          {Object.keys(ronda.Robots).map(draw_Bots_status)}
        </Layer>
    </Stage>);
}
 
export default Board;
