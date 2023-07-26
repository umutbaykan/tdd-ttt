import Todo from "./Todo";

describe("Todo component", () => {
  it("mounts", () => {
    cy.mount(<Todo />);
  });

  it("displays the text it was passsed in as a prop", () => {
    cy.mount(<Todo text="do laundry" index={0} />);
    cy.getByCy("todo-0").should("have.text", "do laundry");
  });

  it("has an undone class if passed in false for isDone prop", () => {
    cy.mount(<Todo text="some text" index={0} isDone={false} />);
    cy.getByCy("todo-0").should("have.class", "todo undone");
  });

  it("has an done class if passed in true for isDone prop", () => {
    cy.mount(<Todo text="some text" index={0} isDone={true} />);
    cy.getByCy("todo-0").should("have.class", "todo done");
  });
});
