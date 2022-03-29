import React, { useState } from "react";

export default function ControlButton({ handleClick, char }) {
    let buttonUp =
        "border-t-2 border-b-8 border-l-2 border-r-2 border-black border-solid";
    let buttonDown =
        "border-t-2 border-b-2 border-l-2 border-r-2 border-solid border-black";
    const [border, setBorder] = useState(buttonUp);
    return (
        <button
            className={"w-12 h-12 rounded-full hover:bg-yellow-200 " + border}
            onClick={handleClick}
            onMouseDown={() => setBorder(buttonDown)}
            onMouseUp={() => setBorder(buttonDown)}
        >
            {char}
        </button>
    );
}