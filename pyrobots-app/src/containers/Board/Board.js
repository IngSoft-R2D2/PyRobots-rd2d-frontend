import React from 'react';
import { Stage, Layer, Circle, Rect, Text } from 'react-konva';
import './Board.css';

const Board = (props) => { 
  const ronda = props.round; 
  const finished = props.finished; 
  const array_ronda = Object.keys(ronda.Robots); 
  const colors = ["red","blue","brown","green"]
  //console.log(ronda.Robots)
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
       {Object.keys(ronda.Robots).map((robot)=>( 
              // console.log(ronda.Robots[robot].damage)
          (ronda.Robots[robot].damage===100) 
          ?<Text 
              fontFamily={'Roboto'}
              fill = {colors[array_ronda.indexOf(robot)]}
              x={ronda.Robots[robot].position[0]/2+40} 
              y={ronda.Robots[robot].position[1]/2+50} 
              fontSize={20} 
              text = {"X"}
              key={robot}/>
          :<Circle 
              x={ronda.Robots[robot].position[0]/2+40} 
              y={ronda.Robots[robot].position[1]/2+60} 
              radius={10} 
              fill={colors[array_ronda.indexOf(robot)]} 
              stroke="black" 
              key={robot} />
          ))}
        {/* misiles */}
        {Object.keys(ronda.Missiles).map((misil)=>( 
          (ronda.Missiles[misil].missile_status===true || finished)
          ? <Circle 
              x={-1000} 
              y={-1000} 
              radius={15} 
              fill="red" 
              stroke="black"
              key={misil} />
          :<Circle 
              x={ronda.Missiles[misil].missile_position[0]/2+40} 
              y={ronda.Missiles[misil].missile_position[1]/2+60} 
              radius={5} 
              fill="grey" 
              stroke="black"
              key={misil} />
          ))}
       {/* {Object.keys(ronda.Robots).map((robot)=>(
       <Text 
          fontFamily={'Roboto'}
          fill = {colors[array_ronda.indexOf(robot)]}
          x={600} 
          y={130*array_ronda.indexOf(robot)+50} 
          fontSize={40} 
          text = {"Robot: "+robot+'\n\nvida: '+ (100-ronda.Robots[robot].damage)+'%'} 
          key={robot}/>
       ))}

       {Object.keys(ronda).map((robot)=>(
       <Rect 
          key={robot}
          x={800} 
          y={130*array_ronda.indexOf(robot)+120}   
          width={500-5*+ronda.Robots[robot].damage}
          height={50}
          fill= "green"
          /> */}
       {/* ))} */}
      </Layer>
    </Stage>
    );
}
 
export default Board;
