import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import { Layout, ForLoop } from "./components";
import {
    ForLoopContext,
    initialForLoopState,
    reducer,
    ACTIONS,
} from "./lib/state";
function App() {
    const [state, dispatch] = useReducer(reducer, initialForLoopState);
    return (
        <div className="App">
            <Layout>
                <ForLoopContext.Provider value={{ state, dispatch, ACTIONS }}>
                    <ForLoop />
                </ForLoopContext.Provider>
            </Layout>
        </div>
    );
}

export default App;
