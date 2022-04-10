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

    it("displays instructions", () => {
        cy.get(".Values__instructions")
            .filter(":visible")
            .contains(
                "Evaluate the expression and press the keyboard key to guess the resulting value's data type."
            );
    });

    it("displays an expression", () => {
        cy.get(".Values__expression").filter(":visible").should("not.be.empty");
    });

    it("has buttons for each js data type", () => {
        let keyCaps = dataTypes.map((dt) => {
            let key =
                dt === "Number"
                    ? "M"
                    : dt === "BigInt"
                    ? "I"
                    : dt === "Symbol"
                    ? "Y"
                    : dt[0];
            let type = dt;
            return {
                key,
                type,
            };
        });
        cy.get(".Values__option").each((button, index, listOfButtons) => {
            expect(listOfButtons).to.have.length(8);
            expect(button).to.have.text(
                keyCaps[index].key + keyCaps[index].type
            );
        });
    });
});
