function Footer({suggestMoveClick, newGameClick}) {
    return(
        <div className="game-footer">
            <button className="footer-button" onClick={newGameClick}>New Game</button>
            <button className="footer-button" onClick={suggestMoveClick}>Suggest</button>
        </div>
    )
}

export default Footer;