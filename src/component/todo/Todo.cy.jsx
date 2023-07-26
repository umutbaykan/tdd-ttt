import Todo from "./Todo";

describe("Todo component", () => {
  it("mounts", () => {
    cy.mount(<Todo />);
  });

  it("displays the text it was passsed in as a prop", () => {
    cy.mount(<Todo text="do laundry" index={0} />);
    cy.getByCy("todo-0").should("have.text", "do laundry");
  });
});
