import React from "react";

export default function Instructions(props) {
    return (
        <div className="mt-12">
            <p className="p-4 Values__instructions">{props.children}</p>
        </div>
    );
}
