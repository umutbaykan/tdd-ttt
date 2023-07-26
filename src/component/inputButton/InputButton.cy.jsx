import InputButton from "./InputButton";

describe("InputButton component", () => {
  it("mounts", () => {
    cy.mount(<InputButton />);
  });

  it("displays add note text in itself", () => {
    cy.mount(<InputButton />);
    cy.getByCy("input-button").should("have.text", "Add Note!");
  });
});
