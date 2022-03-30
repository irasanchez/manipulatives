import React, { useContext } from "react";
import { ControlButton } from "./";
import { ForLoopContext } from "../lib/state";

export default function Controls({
    activeSection,
    togglePlaying,
    isPlaying,
    limits,
}) {
    const { dispatch, ACTIONS } = useContext(ForLoopContext);
    let { CHANGE_STEP } = ACTIONS;
    return (
        <div className="flex justify-end mt-2">
            <ControlButton
                char="⬅️"
                handleClick={() => {
                    if (limits[0] === activeSection) {
                        dispatch({ type: CHANGE_STEP, step: 1 });
                    } else {
                        dispatch({
                            type: CHANGE_STEP,
                            step: activeSection - 1,
                        });
                    }
                }}
            />
            <ControlButton
                handleClick={() => togglePlaying(!isPlaying)}
                char="⏯"
            />
            <ControlButton
                handleClick={() => {
                    if (limits[1] === activeSection) {
                        dispatch({ type: CHANGE_STEP, step: limits[1] });
                    } else {
                        dispatch({
                            type: CHANGE_STEP,
                            step: activeSection + 1,
                        });
                    }
                }}
                char="➡️"
            />
        </div>
    );
}
