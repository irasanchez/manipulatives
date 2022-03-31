import React, { useContext } from "react";
import NumericInput from "react-numeric-input";
import { ForLoopContext } from "../lib/state";

export default function MutableExpressionPart({
    content,
    isActive,
    isDeclaration,
    isComparison,
}) {
    const { state, dispatch, ACTIONS } = useContext(ForLoopContext);
    const { CHANGE_END, CHANGE_START } = ACTIONS;
    const { start, end, iterationCount, step } = state;
    let splitPoint = content.search(/\d/) - 1;
    let characters = content.slice(0, splitPoint);
    let symbols = content.slice(splitPoint);
    let disabled = step !== 0;
    return (
        <span>
            {characters === "i" ? (
                characters
            ) : (
                <NumberInput
                    isActive={isActive}
                    isStart={isDeclaration}
                    disabled={disabled}
                />
            )}
            {!symbols.includes(";") ? (
                <OperatorSelect disabled={disabled} />
            ) : (
                symbols
            )}
        </span>
    );
}

function NumberInput({ isActive, isStart, disabled }) {
    const {
        state: { start, end },
        dispatch,
        ACTIONS,
    } = useContext(ForLoopContext);
    const { CHANGE_START, CHANGE_END } = ACTIONS;
    return (
        <>
            <NumericInput
                readOnly={disabled}
                onChange={(valueAsNumber) => {
                    dispatch({
                        type: isStart ? CHANGE_START : CHANGE_END,
                        [`${isStart ? "start" : "end"}`]: valueAsNumber,
                    });
                }}
                className={`${isActive ? "active " : ""}`}
                value={isStart ? start : end}
                max={99}
                // readOnly={step === 0}
            />
        </>
    );
}

function OperatorSelect({ disabled }) {
    const {
        state: { operators },
        dispatch,
        ACTIONS,
    } = useContext(ForLoopContext);
    const { CHANGE_ITERATOR } = ACTIONS;

    return (
        <select
            className="mx-2 bg-transparent border-4 border-black border-solid"
            disabled={disabled}
            onChange={(e) =>
                dispatch({ type: CHANGE_ITERATOR, iterator: e.target.value })
            }
        >
            {operators.map((operator, index) => (
                <option
                    key={"operator-" + index}
                    value={index}
                    className="bg-transparent"
                >
                    {operator}
                </option>
            ))}
        </select>
    );
}
