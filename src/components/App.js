import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";

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
                <Route index element={() => null} />
                <Route path="/values" element={() => null} />
            </Routes>
        </div>
    );
}

export default App;
