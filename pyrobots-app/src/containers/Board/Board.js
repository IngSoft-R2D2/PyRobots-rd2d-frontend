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
            x={20}
            y={50}
            width={510}
            height={510}
            fill= "rgb(68, 189, 92)"
            shadowBlur={10}
          />
       {Object.keys(ronda).map((robot)=>(
       <Circle 
          x={ronda[robot].position[0]/2+20} 
          y={ronda[robot].position[1]/2+50} 
          radius={10} 
          fill={colors[array_ronda.indexOf(robot)]} 
          stroke="black" 
          key={robot} />
        ))}
       {Object.keys(ronda).map((robot)=>(
       <Text 
          x={600} 
          y={50*array_ronda.indexOf(robot)+50} 
          fontSize={50} 
          text = {"Robot: "+robot} 
          key={robot}/>
       ))}

       {Object.keys(ronda).map((robot)=>(
       <Rect 
          x={900} 
          y={50*array_ronda.indexOf(robot)+50}   
          width={500-5*+ronda[robot].damage}
          height={50}
          fill= "red"
          shadowBlur={10}/>
       ))}
       {Object.keys(ronda).map((robot)=>(
       <Rect 
          x={900} 
          y={50*array_ronda.indexOf(robot)+50}   
          width={500-5*+ronda[robot].damage}
          height={50}
          fill= "red"
          shadowBlur={10}/>
       ))}
      </Layer>
    </Stage>
    );
}
// como hacer q los robots no se salgan?
// como hacer para que tengan distinto color?
// como hacer para poder mapear bien su estado?  
export default Board;
