function onClick(id) {
    alert("click " + id);
}

function GameCircle({id, color, children}) {
    return(
        <div className="gameCircle" style={{ backgroundColor: color }} onClick={() => onClick(id)}>
        </div>
    )
}

export default GameCircle;