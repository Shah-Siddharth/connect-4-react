import { useState } from "react";
import GameCircle from "./components/GameCircle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { checkDraw, checkWinner } from "./utils/helper";
import * as constants from "./utils/constants";

function App() {

  const [gameBoard, setGameBoard] = useState(Array(16).fill(constants.NO_PLAYER));
  const [currentPlayer, setCurrentPlayer] = useState(constants.PLAYER_1);
  const [gameWinner, setGameWinner] = useState(constants.NO_PLAYER);
  const [gameState, setGameState] = useState(constants.GAME_STATE_PLAYING);

  const renderGameCircles = () => {
    const circles = [];
    for (let i=0; i<constants.NO_OF_CIRCLES; i++) {
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

    if (gameBoard[id] !== constants.NO_PLAYER) return;
    if (gameState !== constants.GAME_STATE_PLAYING) return;

    if (checkWinner(gameBoard, id, currentPlayer)) {
      setGameState(constants.GAME_STATE_WIN);
      setGameWinner(currentPlayer);

    } else if (checkDraw(gameBoard, id, currentPlayer)) {
      setGameState(constants.GAME_STATE_DRAW);
      setGameWinner(constants.NO_PLAYER);
    }
    
    let newGameBoard = gameBoard.map((elem, idx) => {
      if (idx === id) return currentPlayer;
      return elem;
    });

    setGameBoard(newGameBoard);
    setCurrentPlayer(currentPlayer === constants.PLAYER_1 ? constants.PLAYER_2 : constants.PLAYER_1);
  }

  return (
    <div className="app-wrapper">
      <Header gameState={gameState} currentPlayer={currentPlayer} gameWinner={gameWinner} />

      <div className="gameBoard">
      {renderGameCircles()}
      </div>

      <Footer />
    </div>    
  );
}

export default App;
