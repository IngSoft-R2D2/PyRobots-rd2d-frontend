import React from 'react';
import { Stage, Layer, Circle, Rect, Text } from 'react-konva';
import './Board.css';

const Board = (props) => { 
  const ronda = props.round; 
  const finished = props.finished; 

  return (
    finished ? 
    // caso se acaba la animacion 
    <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
        <Text x={600} y={50} fontSize={50} text = "simulacion terminada"/>
          <Rect
            x={20}
            y={50}
            width={500}
            height={500}
            fill= "rgb(68, 189, 92)"
            shadowBlur={10}
          />
      </Layer>
    </Stage> : 
    // caso animacion normal 
    
    <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Rect
            x={20}
            y={50}
            width={500}
            height={500}
            fill= "rgb(68, 189, 92)"
            shadowBlur={10}
          />
       {Object.keys(ronda).map((robot)=>(
       <Circle x={ronda[robot].position[0]/2+20} y={ronda[robot].position[1]/2+50} radius={10} fill={'#'+parseInt(robot)} stroke="black" key={robot} text="123"/>
        ))}
       {Object.keys(ronda).map((robot)=>(
       <Text x={600} y={50} fontSize={20} text = {"nombre: "+robot+" damage: "+ronda[robot].damage}/>
       ))}
        <Text x={600} y={70} fontSize={20} text = {"nombre: "+"R1"+" damage: "+ronda["R1"].damage}/>

      </Layer>
    </Stage>
    // </Stack>
  );
}

export default Board;
