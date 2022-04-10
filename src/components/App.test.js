import { mounter } from "../lib/testHelpers";

it("renders App", () => {
    mounter();
    cy.get(".App").should("have.class", "App");
});

it("has a working nav", () => {
    mounter();
    cy.get("nav").contains("a", "Values").click({ force: true }); // force:true allows it to click through the testing iframe
    cy.url().should("include", "/values");
});
