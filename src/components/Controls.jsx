import React from "react";

export default function Controls({ setActiveSection, activeSection, togglePlaying, isPlaying }) {
  return (
    <div>
      <button
        onClick={() => setActiveSection(
          activeSection !== 0 ? activeSection - 1 : 0
        )}
      >
        ⬅️
      </button>
      <button onClick={() => togglePlaying(!isPlaying)}>⏯</button>
      <button
        onClick={() => setActiveSection(
          activeSection === 2 ? 0 : activeSection + 1
        )}
      >
        ➡️
      </button>
    </div>
  );
}
