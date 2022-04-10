import { goToRoute, mounter } from "../../lib/testHelpers";
import { dataTypes } from "../../lib";

describe("Values component is working", () => {
    beforeEach(() => {
        mounter();
        goToRoute("Values");
    });

    it("is rendered at the right route", () => {
        cy.contains(".Values h1", "Values");
        cy.url().should("include", "/values");
    });

    it("has buttons for each js data type", () => {
        cy.get(".Values__option").each((button, index, listOfButtons) => {
            expect(listOfButtons).to.have.length(8);
            expect(button).to.have.text(dataTypes[index]);
        });
    });
});
