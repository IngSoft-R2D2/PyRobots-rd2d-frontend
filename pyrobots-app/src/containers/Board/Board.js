import React from 'react';
import { Stage, Layer, Circle, Rect, Text } from 'react-konva';
import './Board.css';

const Board = (props) => { 
  const ronda = props.round; 
  const finished = props.finished; 
  const array_ronda = Object.keys(ronda); 
  const colors = ["red","blue","brown","green"]

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
       {Object.keys(ronda).map((robot)=>( (ronda[robot].damage===100) ? 
        <Text 
            fontFamily={'Roboto'}
            fill = {colors[array_ronda.indexOf(robot)]}
            x={ronda[robot].position[0]/2+40} 
            y={ronda[robot].position[1]/2+50} 
            fontSize={20} 
            text = {"X"}
            key={robot}/>
          :
        <Circle 
            x={ronda[robot].position[0]/2+40} 
            y={ronda[robot].position[1]/2+60} 
            radius={10} 
            fill={colors[array_ronda.indexOf(robot)]} 
            stroke="black" 
            key={robot} />
          ))}
        {/* misiles */}
        {Object.keys(ronda).map((robot)=>( finished ? 
        <Circle 
        x={-1000} 
        y={-1000} 
        radius={15} 
        fill="rgb(68, 189, 92)" 
        stroke={colors[array_ronda.indexOf(robot)]} 
        key={robot} />:
        (ronda[robot].damage===100) ? 
        <Circle 
        x={-1000} 
        y={-1000} 
        radius={5} 
        fill={colors[array_ronda.indexOf(robot)]} 
        stroke="black" 
        key={robot} />
          :
        <Circle 
            x={ronda[robot].missile[0]/2+40} 
            y={ronda[robot].missile[1]/2+60} 
            radius={15} 
            fill="rgb(68, 189, 92)"
            stroke={colors[array_ronda.indexOf(robot)]} 
            key={robot} />
          ))}
       {Object.keys(ronda).map((robot)=>(
       <Text 
          fontFamily={'Roboto'}
          fill = {colors[array_ronda.indexOf(robot)]}
          x={600} 
          y={130*array_ronda.indexOf(robot)+50} 
          fontSize={40} 
          text = {"Robot: "+robot+'\n\nvida: '+ (100-ronda[robot].damage)+'%'} 
          key={robot}/>
       ))}

       {Object.keys(ronda).map((robot)=>(
       <Rect 
          key={robot}
          x={800} 
          y={130*array_ronda.indexOf(robot)+120}   
          width={500-5*+ronda[robot].damage}
          height={50}
          fill= "green"
          />
       ))}
      </Layer>
    </Stage>
    );
}
 
export default Board;
