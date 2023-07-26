import Form from "./From";

describe("Form component", () => {
  it("mounts", () => {
    cy.mount(<Form />);
  });

  it("can type in the value", () => {
    cy.mount(<Form />);
    cy.getByCy("input-form").type("iron clothes");
    cy.getByCy("input-form").should("have.value", "iron clothes");
  });

  it("has a placeholder", () => {
    cy.mount(<Form />);
    cy.getByCy("input-form")
      .should("have.attr", "placeholder")
      .and("contain", "type in your note here");
  });
});
