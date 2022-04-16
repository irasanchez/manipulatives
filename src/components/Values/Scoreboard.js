import React from "react";

export default function Scoreboard() {
    return (
        <div className="absolute top-0 right-0 p-2 m-4 Values__scoreboard">
            <div className="Values__score--total">total score</div>
            <div className="Values__score--guess">most recent in/correct</div>
        </div>
    );
}
