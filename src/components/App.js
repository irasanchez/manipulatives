import React from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import Values from "./Values/Values";
import logo from "../assets/upright_logo_text_white.png";
function App() {
    const { pathname } = useLocation();
    return (
        <div className="relative mx-auto my-0 border border-solid App w-132 h-132 border-upright-orange">
            {pathname !== "/values" && <Nav />}
            <Routes>
                <Route path="/">
                    <Route path="/values" element={<Values />} />
                </Route>
            </Routes>
            <footer className="absolute bottom-0 flex items-center justify-center w-full py-2 bg-upright-orange">
                <img src={logo} />
            </footer>
        </div>
    );
}

function Nav() {
    let navLinkStyles =
        "p-4 m-4 font-bold text-white rounded bg-upright-orange flex-wrap font-bold";
    return (
        <main className="flex flex-col items-center justify-center mt-10 ">
            <h1 className="text-2xl font-bold">Choose an exercise:</h1>
            <nav className="flex items-center justify-center m-10">
                <NavLink to="/values" className={navLinkStyles}>
                    Values
                </NavLink>
                <NavLink to="/arrays" className={navLinkStyles}>
                    Arrays
                </NavLink>
            </nav>
        </main>
    );
}

export default App;
