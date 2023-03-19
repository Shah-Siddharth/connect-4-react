function Footer({buttonOnClick}) {
    return(
        <div className="game-footer">
            <button className="footer-button" onClick={buttonOnClick}>New Game</button>
        </div>
    )
}

export default Footer;