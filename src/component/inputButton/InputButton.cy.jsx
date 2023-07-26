import InputButton from "./InputButton";

describe("InputButton component", () => {
  it("mounts", () => {
    cy.mount(<InputButton />);
  });

  it("displays add note text in itself", () => {
    cy.mount(<InputButton />);
    cy.getByCy("input-button").should("have.text", "Add Note!");
  });

  it("makes an API call with the props it has been passed in", () => {
    cy.intercept("POST", "/post", []).as("notePostRequest");
    cy.get("@notePostRequest.all").should("have.length", 0);
    cy.mount(<InputButton noteText="clean floors" />);
    cy.getByCy("input-button").click();
    cy.get("@notePostRequest").should(({ request }) => {
      expect(request.url).to.include("/post");
      expect(request.method).to.equal("POST");
      expect(request.body.note).to.contain("clean floors");
    });
    cy.get("@notePostRequest.all").should("have.length", 1);
  });
});
