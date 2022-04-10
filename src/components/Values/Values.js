import React from "react";
import { dataTypes } from "../../lib";
export default function Values() {
    return (
        <div className="Values">
            <h1>Values</h1>
            <div className="Values__options">
                {dataTypes.map((dt, i) => (
                    <button className="Values__option" key={i}>
                        {dt}
                    </button>
                ))}
            </div>
        </div>
    );
}
