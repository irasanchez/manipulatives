import React, { useState, useEffect } from "react";
import BackButton from "../StyledComponents/BackButton";

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
    const checkIfGuessIsCorrect = () => {};
    const handleKeyDown = (e) => {
        let keyCapPressed = keyCaps.filter((keyCap) => {
            return keyCap.key.toLowerCase() === e.key;
        });
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
    }, []);
    return (
        <div className="relative flex flex-col items-center justify-center Values">
            <BackButton />
            <h1 className="mt-6 text-4xl font-bold Values__title">Values</h1>
            <div className="flex justify-between mt-12">
                <p className="w-1/2 p-4 Values__instructions">
                    Press the keyboard key to guess the resulting value's data
                    type.
                </p>
                <div className="p-2 Values__scoreboard">
                    <div className="Values__score--total">total score</div>
                    <div className="Values__score--guess">
                        most recent in/correct
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center w-1/2 h-24 my-4 text-5xl text-center bg-gray-200 rounded Values__expression text-upright-orange">
                <span>{expressions.easy[0].expression}</span>
            </div>
            <div className="flex flex-wrap items-center justify-center w-2/3 mx-auto mt-4 Values__options">
                {keyCaps.map((dt, i) => (
                    <button
                        style={styles.Values__key}
                        className="Values__option Values__key"
                        key={i}
                        id={`Values__option--${i}`}
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

                {/* <div>
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
                </div> */}
            </div>
        </div>
    );
}
