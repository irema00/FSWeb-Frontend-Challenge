describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
});

describe("Dil Değiştirme Testi", () => {
  it("Kullanıcı dil değiştirebilmeli", () => {
    cy.visit("http://localhost:3000");
    cy.contains("TÜRKÇE").click();
    cy.contains("kullanıcı");
    cy.contains("SWITCH TO ENGLISH").click();
    cy.contains("craft");
  });
});
