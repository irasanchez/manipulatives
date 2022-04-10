import React from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import Values from "./Values/Values";

function App() {
    const { pathname } = useLocation();
    return (
        <div className="App">
            {pathname !== "/values" && <Nav />}
            <Routes>
                <Route path="/">
                    <Route path="/values" element={<Values />} />
                </Route>
            </Routes>
        </div>
    );
}

function Nav() {
    return (
        <nav>
            <NavLink to="/values">Values</NavLink>
            {/* <NavLink></NavLink>
<NavLink></NavLink>
<NavLink></NavLink>
<NavLink></NavLink> */}
        </nav>
    );
}

export default App;
