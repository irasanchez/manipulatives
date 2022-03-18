import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Controls, ForLoop } from "./";
import Lexer from '../../lib/lexer';
function App() {
    let demos = ["for ( let i = 0; i < 10; i++ ) { console.log(i); }"];
    let lexer = new Lexer(demos[0]);
    console.log('FINAL', lexer.getLex());

    return (
        <div className="App">
            <Controls />
            {`for (let i = 0; i < 10; i++) { console.log(i); }`}
            <br />
            <ForLoop>
                
            </ForLoop>
        </div>
    );
}

export default App;
