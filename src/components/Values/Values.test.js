import { mounter } from "../../lib/testHelpers";

it("renders Values", () => {
    mounter();
    cy.get("nav").contains("a", "Values").click({ force: true });
    cy.contains(".Values h1", "Values");
});
