import { useState } from "react";
import GameCircle from "./components/GameCircle";

const NO_PLAYER = 0
const PLAYER_1 = 1
const PLAYER_2 = 2

function App() {

  const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

  const gameCircleClicked = (id) => {
    
    gameBoard[id] = currentPlayer;
    
    setGameBoard(gameBoard);
    setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
  }

  return (
    <div className="gameBoard">
      <GameCircle id={1} onCircleClicked={gameCircleClicked}>
      </GameCircle>

      <GameCircle id={2}>
      </GameCircle>

      <GameCircle id={3}>
      </GameCircle>

      <GameCircle id={4}>
      </GameCircle>

      <GameCircle id={5}>
      </GameCircle>

      <GameCircle id={6}>
      </GameCircle>

      <GameCircle id={7}>
      </GameCircle>

      <GameCircle id={8}>
      </GameCircle>

      <GameCircle id={9}>
      </GameCircle>

      <GameCircle id={10}>
      </GameCircle>

      <GameCircle id={11}>
      </GameCircle>

      <GameCircle id={12}>
      </GameCircle>

      <GameCircle id={13}>
      </GameCircle>

      <GameCircle id={14}>
      </GameCircle>

      <GameCircle id={15}>
      </GameCircle>

      <GameCircle id={16}>
      </GameCircle>

    </div>
  );
}

export default App;
