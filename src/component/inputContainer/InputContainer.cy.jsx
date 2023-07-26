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

  it("can type in text to the form and when submitted, calls the API with text typed in", () => {
    cy.intercept("POST", "/post", []).as("notePostRequest");
    cy.get("@notePostRequest.all").should("have.length", 0);
    cy.mount(<InputContainer />);
    cy.getByCy("input-form").type("Attend interview");
    cy.getByCy("input-button").click();
    cy.get("@notePostRequest").should(({ request }) => {
      expect(request.url).to.include("/post");
      expect(request.method).to.equal("POST");
      expect(request.body.note).to.contain("Attend interview");
    });
    cy.get("@notePostRequest.all").should("have.length", 1);
  });
});
