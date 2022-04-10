import { mounter, goToRoute } from "../lib/testHelpers";

describe("The App is in working order", () => {
    it("renders App", () => {
        mounter();
        cy.get(".App").should("have.class", "App");
    });

    it("has a working nav", () => {
        mounter();
        goToRoute("Values");
    });
});
