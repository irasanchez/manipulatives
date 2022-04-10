import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Values from "./Values/Values";

function App() {
    return (
        <div className="App">
            <nav>
                <NavLink to="/values">Values</NavLink>
                {/* <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink> */}
            </nav>
            <Routes>
                <Route path="/">
                    <Route path="/values" element={<Values />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
