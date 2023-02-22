function Header({player}) {
    return(
        <div className="game-header">
            <div className="header-text">Player {player}'s turn</div>
        </div>
    )
}

export default Header;