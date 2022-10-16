import React from 'react';
import './Board.css';

  const Board = () => {  
    return ( 
        <table>
          <tbody>
          {Array.from({length:10}, _ =>
            <tr>{Array.from({length:10}, _ => <Cell />)}</tr>
          )}
          </tbody>
        </table>
      );
    }

  const Cell = () => {
        return <td className="cell"></td>;
    }

export default Board;
