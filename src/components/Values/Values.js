import React, { useState } from "react";
import { dataTypes, expressions } from "../../lib";
export default function Values() {
    let keyCaps = dataTypes.map((dt) => {
        let key =
            dt === "Number"
                ? "M"
                : dt === "BigInt"
                ? "I"
                : dt === "Symbol"
                ? "Y"
                : dt[0];
        let type = dt;
        return {
            key,
            type,
        };
    });
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
        <div className="flex flex-col items-center justify-center Values">
            <h1 className="Values__title">Values</h1>
            <p className="Values__instructions">
                Evaluate the expression and press the keyboard key to guess the
                resulting value's data type.
            </p>
            <div className="Values__expression">
                {expressions.easy[0].expression}
            </div>
            <div className="flex flex-col items-center justify-center w-1/2 Values__options">
                <div>
                    {keyCaps.slice(0, 4).map((dt, i) => (
                        <button
                            style={styles.Values__key}
                            className="Values__option Values__key"
                            key={i}
                        >
                            <div
                                style={styles.Values__keycap}
                                className="Values__keycap"
                            >
                                {dt.key}
                                <span
                                    style={styles["Values__keycap--side"]}
                                    className="Values__keycap--side"
                                >
                                    {dt.type}
                                </span>
                            </div>
                        </button>
                    ))}
                </div>
                <div>
                    {keyCaps.slice(4).map((keyCap, i) => (
                        <button
                            style={styles.Values__key}
                            className="Values__option Values__key"
                            key={i}
                        >
                            <div
                                style={styles.Values__keycap}
                                className="Values__keycap"
                            >
                                {keyCap.key}
                                <span
                                    style={styles["Values__keycap--side"]}
                                    className="Values__keycap--side"
                                >
                                    {keyCap.type}
                                </span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
