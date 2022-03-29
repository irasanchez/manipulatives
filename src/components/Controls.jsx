import React from "react";
import { ControlButton } from "./";

export default function Controls({
    setActiveSection,
    activeSection,
    togglePlaying,
    isPlaying,
    limits,
}) {
    return (
        <div className="flex justify-around w-1/3">
            <ControlButton
                char="⬅️"
                handleClick={() => {
                    if (limits[0] === activeSection) {
                        setActiveSection(1);
                    } else {
                        setActiveSection(activeSection - 1);
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
                        setActiveSection(limits[1]);
                    } else {
                        setActiveSection(activeSection + 1);
                    }
                }}
                char="➡️"
            />
        </div>
    );
}
