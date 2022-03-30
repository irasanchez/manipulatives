import React from "react";
import NumericInput from "react-numeric-input";
import NumicInput from "react-numeric-input";

export default function MutableExpressionPart({ content, isActive }) {
    let splitPoint = content.search(/\d/) - 1;
    let characters = content.slice(0, splitPoint);
    let symbols = content.slice(splitPoint);

    return (
        <span>
            {characters === "i" ? (
                characters
            ) : (
                <NumberInput isActive={isActive} value={+characters} />
            )}
            {!symbols.includes(";") ? <OperatorSelect /> : symbols}
        </span>
    );
}

function NumberInput({ value, isActive }) {
    return (
        <NumericInput
            className={`${isActive ? "active " : ""}`}
            value={value}
            min={1}
            max={99}
            readOnly={true}
        />
    );
}

function OperatorSelect({}) {
    let operators = ["++", "--", "+ 2", "* 2", "/ 2", "- 2"];
    return (
        <select disabled>
            {operators.map((operator) => (
                <option value={operator}>{operator}</option>
            ))}
        </select>
    );
}
