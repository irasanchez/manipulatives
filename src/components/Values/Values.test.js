import { goToRoute, mounter } from "../../lib/testHelpers";

describe("Values component is working", () => {
    it("is rendered at the right route", () => {
        mounter();
        goToRoute("Values");
        cy.url;
        cy.contains(".Values h1", "Values");
        cy.url().should("include", "/values");
    });
});
