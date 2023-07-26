import TodoContainer from "./TodoContainer";

describe("TodoContainer component", () => {
  let todos;

  beforeEach(() => {
    cy.fixture("todos").then((data) => {
      todos = data.todos;
    });
  });

  it("mounts", () => {
    cy.mount(<TodoContainer todos={todos} />);
  });

  it("renders a list of todos", () => {
    cy.mount(<TodoContainer todos={todos} />);
    cy.getByCyLike("todo").should("have.length", 2);
  });
});
