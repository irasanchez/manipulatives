import React from "react";

export default function Instructions(props) {
    return (
        <>
            <div className="mt-12 Values__instructions">{props.children}</div>
        </>
    );
}
