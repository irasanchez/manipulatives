import React, { useState, useEffect } from "react";
import BackButton from "../StyledComponents/BackButton";
import Title from "../StyledComponents/Title";

import { expressions } from "../../lib";
import Scoreboard from "./Scoreboard";
import KeyCaps from "./KeyCaps";
import Instructions from "./Instructions";

export default function Values() {
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
            let userGuess = keyCapPressed[0].key.toUpperCase();
            checkIfGuessIsCorrectAndUpdate(userGuess);
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
            <Instructions>
                Press the keyboard key to guess the resulting value's data type.
            </Instructions>
            <Scoreboard></Scoreboard>
            <div className="flex items-center justify-center w-1/2 h-24 my-4 text-5xl text-center bg-gray-200 rounded Values__expression text-upright-orange">
                <span>{expressions.easy[currentExpression].expression}</span>
            </div>
            <KeyCaps
                checkIfGuessIsCorrectAndUpdate={checkIfGuessIsCorrectAndUpdate}
            />
        </main>
    );
}
