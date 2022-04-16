import React from "react";

export default function KeyCap(props) {
    let styles = {
        Values__key: {
            width: "80px",
            height: "90px",
            borderWidth: "6px 14px 20px",
            background: "#d3cfcc",
            borderColor: "#ece8e4 #dedad6 #c9c4c4",
            borderRadius: "8px",
            borderStyle: "solid",
            margin: "4px",
        },
        Values__keycap: {
            width: "54px",
            height: "64px",
            padding: "10px 0 0 14px",
            fontSize: "20px",
            lineHeight: 1,
            background: "linear-gradient(to right, #e5e2e1, #f5f3f1, #e5e2e1)",
            boxShadow: "0 0 20px rgba(0,0,0,0.15)",
            borderRadius: "4px",
            position: "relative",
        },
        "Values__keycap--side": {
            fontSize: "11px",
            lineHeight: 1,
            display: "block",
            position: "absolute",
            left: "0px",
            bottom: "-20px",
            transform: "rotateX(50deg)",
        },
    };
    return (
        <button
            style={styles.Values__key}
            className="Values__option Values__key"
            id={`Values__option--${props.i}`}
            onClick={() => props.checkIfGuessIsCorrectAndUpdate(props.dt.key)}
        >
            <div style={styles.Values__keycap} className="Values__keycap">
                {props.dt.key}
                <span
                    style={styles["Values__keycap--side"]}
                    className="Values__keycap--side"
                >
                    {props.dt.type}
                </span>
            </div>
        </button>
    );
}
