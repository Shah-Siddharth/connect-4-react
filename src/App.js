import { useState } from "react";
import GameCircle from "./components/GameCircle";

const NO_PLAYER = 0;
const PLAYER_1 = 1;
const PLAYER_2 = 2;
const NO_OF_CIRCLES = 16;

function App() {

  const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

  const renderGameCircles = () => {
    const circles = [];
    for (let i=0; i<NO_OF_CIRCLES; i++) {
      circles.push(
      <GameCircle
        id={i}
        key={i}
        className={`player-${gameBoard[i]}`}
        onCircleClicked={gameCircleClicked}
      />
      )
    }

    return circles;
  }

  const gameCircleClicked = (id) => {
    let newGameBoard = gameBoard.map((elem, idx) => {
      if (idx === id) return currentPlayer;
      return elem;
    });

    setGameBoard(newGameBoard);
    setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
  }

  return (
    <div className="gameBoard">
      {renderGameCircles()}
    </div>
  );
}

export default App;
