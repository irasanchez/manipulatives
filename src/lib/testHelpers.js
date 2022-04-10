import React from "react";
import { mount } from "@cypress/react";
import { BrowserRouter } from "react-router-dom";
import App from "../components/App";

export const mounter = () =>
    mount(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
