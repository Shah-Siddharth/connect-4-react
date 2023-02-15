function onClick(id) {
    alert("click " + id);
}

function GameCircle({id, color, children}) {
    return(
        <div style={{ backgroundColor: color, width: 100, height: 100, margin: 20, borderRadius: '50%' }} onClick={() => onClick(id)}>
            {children}
        </div>
    )
}

export default GameCircle;