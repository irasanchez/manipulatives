import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Layout, ForLoop } from "./";

function App() {
    let demos = ["for ( let i = 0; i < 10; i++ ) { console.log(i); }"];
    let [demoOptions, setDemoOptions] = useState(demos);

    return (
        <div className="App">
            <Layout>
                <ForLoop demo={demoOptions[0]} />
            </Layout>
        </div>
    );
}

export default App;
