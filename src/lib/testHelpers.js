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

export const goToRoute = (navLinkText) => {
    cy.get("nav").contains("a", navLinkText).click({ force: true }); // force:true allows it to click through the testing iframe
};
