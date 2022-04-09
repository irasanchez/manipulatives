import React from "react";
import { mount } from "@cypress/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

it("renders App", () => {
    mount(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
    cy.get(".App").should("have.class", "App");
});

it("has a working nav", () => {
    mount(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
    cy.get("nav").contains("a", "Values").click({ force: true }); // force:true allows it to click through the testing iframe
    cy.url().should("include", "/values");
});
