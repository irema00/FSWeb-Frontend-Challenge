describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
});
describe("app tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("loads page successfully", () => {
    cy.contains("Frontend").should("be.visible");
  });
});
