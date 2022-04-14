import { goToRoute, mounter } from "../../lib/testHelpers";
import { dataTypes } from "../../lib";

describe("Values component is working", () => {
    beforeEach(() => {
        mounter();
    });
    it("is rendered at the right route", () => {
        goToRoute("Values");
        cy.contains(".Values h1", "Values");
        cy.url().should("include", "/values");
    });

    it("renders a working back button", () => {
        cy.get(".Back-Button").click({ force: true });
        cy.url().should("not.include", "/values");
    });

    it("displays instructions", () => {
        goToRoute("Values");
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
    it("changes the expression when a button is pushed", () => {
        cy.get(".Values__expression").then(($before) => {
            let beforeText = $before.text();
            cy.get("#Values__option--0")
                .click()
                .then(() => {
                    cy.get(".Values__expression").then(($after) => {
                        let afterText = $after.text();
                        expect(beforeText).to.not.match(
                            new RegExp(afterText, "g")
                        );
                    });
                });
        });
        // and then a button is pushed
    });
    // it("allows the buttons to be activated via keyboard", () => {
    //     // this is done, but I am not sure how to test it yet
    // });
    // it("tells you if your guess is correct or incorrect", () => {
    //     cy.get("Values__score--guess");
    // });
    // it("tells you your overall accuracy", () => {
    //     cy.get("Values__score--total");
    // });
    // it("changes the score color based on accuracy", () => {
    //     cy.get("Values__score--total");
    //     cy.get("Values__score--guess");
    // });
});
