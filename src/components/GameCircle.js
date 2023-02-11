function onClick(id) {
    alert("click " + id);
}

function GameCircle({id, color, children}) {
    return(
        <div style={{ backgroundColor: color }} onClick={() => onClick(id)}>
            {children}
        </div>
    )
}

export default GameCircle;