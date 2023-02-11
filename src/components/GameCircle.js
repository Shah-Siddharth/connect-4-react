import React from "react";

function onClick(id) {
    alert("click " + id);
}

function GameCircle({id, children}) {
    return(
        <div onClick={() => onClick(id)}>
            {children}
        </div>
    )
}

export default GameCircle;