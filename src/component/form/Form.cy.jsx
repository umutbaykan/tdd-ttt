import Form from "./From";

describe("Form component", () => {
  beforeEach(() => {
    const setNoteTextStub = cy.stub().as("setNoteTextStub");
    cy.mount(<Form setNoteText={setNoteTextStub} />);
  });

  it("mounts", () => {
    cy.mount(<Form setNoteText={() => {}} />);
  });

  it("can type in the value", () => {
    cy.getByCy("input-form").type("iron clothes");
    cy.getByCy("input-form").should("have.value", "iron clothes");
  });

  it("has a placeholder", () => {
    cy.getByCy("input-form")
      .should("have.attr", "placeholder")
      .and("contain", "type in your note here");
  });

  it("invokes the callback function it has been passed in with correct value", () => {
    cy.getByCy("input-form").type("iron clothes");
    cy.get("@setNoteTextStub").should("to.be.called");
    cy.get("@setNoteTextStub").should("to.be.calledWith", "iron clothes");
  });
});
