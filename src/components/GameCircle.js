function onClick(id) {
    alert("click " + id);
}

function GameCircle({id}) {
    return(
        <div className={`gameCircle ${id%2 == 0 ? "even" : "odd"}`} onClick={() => onClick(id)}>
        </div>
    )
}

export default GameCircle;