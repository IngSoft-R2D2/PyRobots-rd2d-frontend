import React from 'react';
import { Stage, Layer, Circle, Rect, Text } from 'react-konva';
import './Board.css';

  const Board = () => { 

    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
        <Text text="Simulación" fontSize={30}  />
          <Rect
            x={20}
            y={50}
            width={500}
            height={500}
            fill= "rgb(68, 189, 92)"
            shadowBlur={10}
          />
         
          <Circle x={300} y={460} radius={10} fill="red" stroke="black"/>
          <Circle x={100} y={300} radius={10} fill="hotpink" stroke="black"/>
          <Circle x={130} y={340} radius={10} fill="yellow" stroke="black"/>
          <Circle x={450} y={490} radius={10} fill="blue" stroke="black"/>

        </Layer>
      </Stage>
    );
}

export default Board;
