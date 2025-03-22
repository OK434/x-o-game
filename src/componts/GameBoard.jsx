import { useState } from "react";


export default function GameBoard({ onSelectA, board }) {
 
  // const [gameboard, setgameBoards] = useState(initialGameBoard);
  // function handelS(rowIndex, colIndex) {
  //   setgameBoards((prevGameBoard) => {
  //     const ub = [...prevGameBoard.map((iniArry) => [...iniArry])];
  //     ub[rowIndex][colIndex] = activePlayer;
  //     return ub;
  //   });
  //   onSelectA()
  // }
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectA(rowIndex, colIndex)} disabled={playerSymbol!== null}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
