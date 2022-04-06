import React, { useState } from "react";

import { Values } from ".";

function App() {
    let demos = ["for ( let i = 0; i < 10; i++ ) { console.log(i); }"];
    let [demoOptions, setDemoOptions] = useState(demos);

    return (
        <div className="App">
            test
            <Values />
        </div>
    );
}

export default App;
