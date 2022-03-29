import React from "react";

export default function Controls({
    setActiveSection,
    activeSection,
    togglePlaying,
    isPlaying,
    limits,
}) {
    return (
        <div className="flex justify-around w-1/3">
            <button
                className="w-12 h-12 border-t-2 border-b-8 border-l-2 border-r-2 border-black border-solid rounded-full hover:bg-yellow-200"
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
            <button
                className="w-12 h-12 border-t-2 border-b-8 border-l-2 border-r-2 border-black border-solid rounded-full hover:bg-yellow-200"
                onClick={() => togglePlaying(!isPlaying)}
            >
                ⏯
            </button>
            <button
                className="w-12 h-12 border-t-2 border-b-8 border-l-2 border-r-2 border-black border-solid rounded-full hover:bg-yellow-200"
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
