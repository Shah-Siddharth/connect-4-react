import * as constants from "../utils/constants";

function Header({gameState, currentPlayer, gameWinner}) {

    function renderLabel() {
        switch (gameState) {
            case constants.GAME_STATE_PLAYING:
                return `Player ${currentPlayer}'s Turn`;
            case constants.GAME_STATE_WIN:
                return `Player ${gameWinner} Wins!`;
            default:
                break;
        }
    }

    return(
        <div className="game-header">
            <div className="header-text">{renderLabel()}</div>
        </div>
    )
}

export default Header;