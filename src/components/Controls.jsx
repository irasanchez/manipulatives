import React, { useContext } from "react";
import { ControlButton } from "./";
import { ForLoopContext } from "../lib/state";

export default function Controls({
    activeSection,
    togglePlaying,
    isPlaying,
    limits,
}) {
    const { state, dispatch, ACTIONS } = useContext(ForLoopContext);
    let { CHANGE_STEP, CHANGE_ITERATION_COUNT } = ACTIONS;
    let { iterationCount, end } = state;
    function goToNextStep() {
        if (limits[1] === activeSection) {
            if (iterationCount === end) {
                return;
            }
            dispatch({ type: CHANGE_STEP, step: 1 });
            dispatch({
                type: CHANGE_ITERATION_COUNT,
                iterationCount: iterationCount + 1,
            });
        } else {
            dispatch({
                type: CHANGE_STEP,
                step: activeSection + 1,
            });
        }
    }
    function goToPreviousStep() {
        if (limits[0] === activeSection) {
            if (iterationCount === 0) {
                return;
            }
            dispatch({ type: CHANGE_STEP, step: limits[1] });
            dispatch({
                type: CHANGE_ITERATION_COUNT,
                iterationCount: iterationCount - 1,
            });
        } else {
            dispatch({
                type: CHANGE_STEP,
                step: activeSection - 1,
            });
        }
    }
    return (
        <div className="flex justify-end mt-2">
            <ControlButton char="⬅️" handleClick={goToPreviousStep} />
            <ControlButton
                handleClick={() => togglePlaying(!isPlaying)}
                char="⏯"
            />
            <ControlButton handleClick={goToNextStep} char="➡️" />
        </div>
    );
}
