import React from "react";
import { dataTypes } from "../../lib";
import KeyCap from "./KeyCap";

export default function KeyCaps(props) {
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
    return (
        <div className="flex flex-wrap items-center justify-center w-2/3 mx-auto mt-4 Values__options">
            {keyCaps.map((dt, i) => (
                <KeyCap
                    key={i}
                    checkIfGuessIsCorrectAndUpdate={
                        props.checkIfGuessIsCorrectAndUpdate
                    }
                    dt={dt}
                    i={i}
                />
            ))}
        </div>
    );
}
