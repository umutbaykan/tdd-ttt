import InputContainer from "./InputContainer";

describe("InputContainer component", () => {
  it("mounts", () => {
    cy.mount(<InputContainer />);
  });

  it("renders InputButton and Form components", () => {
    cy.mount(<InputContainer />);
    cy.getByCy("input-button").should("exist");
    cy.getByCy("input-form").should("exist");
  });
});
