import React, { useState, useEffect } from "react";
import BackButton from "../StyledComponents/BackButton";
import Title from "../StyledComponents/Title";

import { dataTypes, expressions } from "../../lib";
import Scoreboard from "../StyledComponents/Scoreboard";

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

    const [currentExpression, setCurrentExpression] = useState(0);
    const [score, setScore] = useState(0);

    const checkIfGuessIsCorrectAndUpdate = (key) => {
        let type = expressions.easy[currentExpression].type;
        let isCorrect = false;
        switch (key) {
            case "B":
                if (Boolean === type) {
                    isCorrect = true;
                }
                break;
            case "N":
                if (null === type) {
                    isCorrect = true;
                }
                break;
            case "U":
                if (undefined === type) {
                    isCorrect = true;
                }
                break;
            case "M":
                if (Number === type) {
                    isCorrect = true;
                }
                break;
            case "I":
                if (BigInt === type) {
                    isCorrect = true;
                }
                break;
            case "S":
                console.log(key, "S case", currentExpression);
                if (String === type) {
                    isCorrect = true;
                }
                break;
            case "Y":
                if (Symbol === type) {
                    isCorrect = true;
                }
                break;
            case "O":
                if (Object === type) {
                    isCorrect = true;
                }
                break;

            default:
                break;
        }

        if (isCorrect) {
            setScore(score + 1);
        }

        if (currentExpression === expressions.easy.length - 1) {
            setCurrentExpression(0);
        } else {
            let nextExpression = currentExpression + 1;
            setCurrentExpression(nextExpression);
        }
    };

    const handleKeyDown = (e) => {
        let keyCapPressed = keyCaps.filter((keyCap) => {
            return keyCap.key.toLowerCase() === e.key;
        });

        if (keyCapPressed.length) {
            checkIfGuessIsCorrectAndUpdate(keyCapPressed[0].key.toUpperCase());
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);

        function removeWhenUnmounted() {
            window.removeEventListener("keydown", handleKeyDown);
        }

        return removeWhenUnmounted;
    }, [currentExpression]);

    return (
        <main className="relative flex flex-col items-center justify-center Values">
            <BackButton />
            <Title className="Values__title">Values</Title>
            <div className="flex justify-between mt-12">
                <p className="w-1/2 p-4 Values__instructions">
                    Press the keyboard key to guess the resulting value's data
                    type.
                </p>
            </div>
            <Scoreboard></Scoreboard>
            <div className="flex items-center justify-center w-1/2 h-24 my-4 text-5xl text-center bg-gray-200 rounded Values__expression text-upright-orange">
                <span>{expressions.easy[currentExpression].expression}</span>
            </div>
            <div className="flex flex-wrap items-center justify-center w-2/3 mx-auto mt-4 Values__options">
                {keyCaps.map((dt, i) => (
                    <button
                        style={styles.Values__key}
                        className="Values__option Values__key"
                        key={i}
                        id={`Values__option--${i}`}
                        onClick={() => checkIfGuessIsCorrectAndUpdate(dt.key)}
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
        </main>
    );
}
