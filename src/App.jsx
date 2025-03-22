import Player from "./componts/player";
import GameBoard from "./componts/GameBoard";
import Log from "./componts/LOG.JSX";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./componts/Win_com";
import GameOver from "./componts/GameOver";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function dirActiv(gameTurn) {
  let currentP = "X";
  if (gameTurn.length > 0 && gameTurn[0].player === "X") {
    currentP = "O";
  }
  return currentP;
}
function App() {
  const [gameTurn, setGameTurns] = useState([]);
  // const [hasWinner, setHasWinner] = useState(false);
  //const [activePlayer, setActivePl] = useState("X");
  const activePlayer = dirActiv(gameTurn);
  let gameboard = initialGameBoard;
  for (const turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;
    gameboard[row][col] = player;
  }
  let winner;
  for (const combi of WINNING_COMBINATIONS) {
    const firstSqSy = gameboard[combi[0].row][combi[0].column];
    const secstSqSy = gameboard[combi[1].row][combi[1].column];
    const ThirstSqSy = gameboard[combi[2].row][combi[2].column];
    if (firstSqSy && firstSqSy === secstSqSy && firstSqSy === ThirstSqSy) {
      winner = firstSqSy;
    }
  }
  const hasDraw = setGameTurns.length === 9 && !winner;
  function handlSelectPl(rowIndex, colIndex) {
    // setActivePl((conAct) => (conAct === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      const currentP = dirActiv(prevTurns);

      const updTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentP },
        ...prevTurns,
      ];
      return updTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player ">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        {(winner || hasDraw)&& <GameOver winner={winner} />}
        <GameBoard onSelectA={handlSelectPl} board={gameboard} />
      </div>
      <Log turns={gameTurn} />
    </main>
  );
}

export default App;
