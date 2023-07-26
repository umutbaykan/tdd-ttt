import TodoContainer from "./TodoContainer";

describe("TodoContainer component", () => {
  it("mounts", () => {
    cy.mount(<TodoContainer />);
  });
});
