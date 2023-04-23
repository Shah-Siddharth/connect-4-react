import * as constants from "../utils/constants";

function Footer({suggestMoveClick, newGameClick, gameState}) {

    const renderButtons = (gameState) => {
        if (gameState === constants.GAME_STATE_PLAYING) {
            return(<button className="footer-button" onClick={suggestMoveClick}>Suggest</button>);
        } else {
            return(<button className="footer-button" onClick={newGameClick}>New Game</button>);
        }
    }

    return(
        <div className="game-footer">
            { renderButtons(gameState) }
        </div>
    )
}

export default Footer;