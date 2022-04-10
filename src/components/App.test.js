import { mounter, goToRoute } from "../lib/testHelpers";

describe("The App is in working order", () => {
    beforeEach(() => {
        mounter();
    });

    it("renders App", () => {
        cy.get(".App").should("have.class", "App");
    });

    it("has a working nav", () => {
        goToRoute("Values");
        cy.get(".Values");
    });
});
