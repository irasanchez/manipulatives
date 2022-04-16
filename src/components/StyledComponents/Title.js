import React from "react";

export default function Title(props) {
    return (
        <h1 className={"mt-6 text-4xl font-bold" + props.className}>
            {props.children}
        </h1>
    );
}
