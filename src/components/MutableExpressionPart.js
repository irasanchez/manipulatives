import React, { useContext } from "react";
import NumericInput from "react-numeric-input";
import { ForLoopContext } from "../lib/state";

export default function MutableExpressionPart({
    content,
    isActive,
    isDeclaration,
    isComparison,
}) {
    let splitPoint = content.search(/\d/) - 1;
    let characters = content.slice(0, splitPoint);
    let symbols = content.slice(splitPoint);

    return (
        <span>
            {characters === "i" ? (
                characters
            ) : (
                <NumberInput isActive={isActive} isStart={isDeclaration} />
            )}
            {!symbols.includes(";") ? <OperatorSelect /> : symbols}
        </span>
    );
}

function NumberInput({ value, isActive, isStart }) {
    const { state, dispatch, ACTIONS } = useContext(ForLoopContext);
    const { CHANGE_ITERATOR, CHANGE_END, CHANGE_START } = ACTIONS;
    const { start, end } = state;
    return (
        <NumericInput
            onChange={(valueAsNumber) => {
                dispatch({
                    type: isStart ? CHANGE_START : CHANGE_END,
                    [`${isStart ? "start" : "end"}`]: valueAsNumber,
                });
            }}
            className={`${isActive ? "active " : ""}`}
            value={isStart ? start : end}
            min={1}
            max={99}
            // readOnly={step === 0}
        />
    );
}

function OperatorSelect() {
    const { state, dispatch, ACTIONS } = useContext(ForLoopContext);
    const { CHANGE_ITERATOR } = ACTIONS;
    const { operators } = state;
    return (
        <select
            className="mx-2 border-4 border-black border-solid"
            disabled={false}
            onChange={(e) =>
                dispatch({ type: CHANGE_ITERATOR, iterator: e.target.value })
            }
        >
            {operators.map((operator, index) => (
                <option value={index}>{operator}</option>
            ))}
        </select>
    );
}
