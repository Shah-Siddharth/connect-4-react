function GameCircle({id, onCircleClicked}) {
    return(
        <div className={`gameCircle ${id%2 === 0 ? "even" : "odd"}`} onClick={() => onCircleClicked(id)}>
        </div>
    )
}

export default GameCircle;