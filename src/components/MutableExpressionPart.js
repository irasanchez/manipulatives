import React from "react";
import NumericInput from "react-numeric-input";
import NumicInput from "react-numeric-input";

export default function MutableExpressionPart({ content, isActive }) {
    let splitPoint = content.search(/\d/) - 1;
    let characters = content.slice(0, splitPoint);
    let symbols = content.slice(splitPoint);

    let operators = ["++", "--", "+ 2", "* 2", "/ 2", "- 2"];

    return (
        <span>
            {characters === "i" ? characters : <Input isActive={isActive} value={+characters} />}
            {symbols}
        </span>
    );
}

function Input({ value, isActive }) {

    return (
        <NumericInput
            className={`${isActive ? "active " :  ""}`}
            value={value}
            min={1}
            max={99}
            readOnly={true}
        />
    );
}

function Select() {
    return (
        <select>
            <option value="">Select</option>
            <option value="">Select</option>
            <option value="">Select</option>
        </select>
    );
}
