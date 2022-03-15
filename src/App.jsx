import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Controls } from "./Controls";
import { ForLoop } from "./ForLoop";

function App() {
    const demos = [
        "for loop",
        "while loop",
        "while loop evolves into for loop",
    ];
    const [currentDemo, setCurrentDemo] = useState(0);
    const [activeSection, setActiveSection] = useState(0);
    const [isPlaying, togglePlaying] = useState(false);

    return (
        <div className="App">
            <select>
                {demos.map((demo) => (
                    <option>{demo}</option>
                ))}
            </select>
            <Controls
                setActiveSection={setActiveSection}
                activeSection={activeSection}
                togglePlaying={togglePlaying}
                isPlaying={isPlaying}
            />

            {demos[currentDemo] === "for loop" && (
                <ForLoop
                    isPlaying={isPlaying}
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                />
            )}
        </div>
    );
}

export default App;

