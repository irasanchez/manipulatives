import React from "react";

export default function Controls({
    setActiveSection,
    activeSection,
    togglePlaying,
    isPlaying,
    limits,
}) {
    return (
        <div>
            <button
                onClick={() => {
                    if (limits[0] === activeSection) {
                        setActiveSection(1);
                    } else {
                        setActiveSection(activeSection - 1);
                    }
                }}
            >
                ⬅️
            </button>
            <button onClick={() => togglePlaying(!isPlaying)}>⏯</button>
            <button
                onClick={() => {
                    if (limits[1] === activeSection) {
                        setActiveSection(limits[1]);
                    } else {
                        setActiveSection(activeSection + 1);
                    }
                }}
            >
                ➡️
            </button>
        </div>
    );
}
