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
    cy.getByCyLike("todo").should("have.length", 3);
  });

  it("has a header saying TODO LIST", () => {
    cy.mount(<TodoContainer todos={todos} />);
    cy.getByCy("todo-header").should("have.text", "TODO LIST");
  });

  it("says You dont have anything you need to do if todo list is empty", () => {
    cy.mount(<TodoContainer todos={[]} />);
    cy.getByCyLike("todo-0").should("not.exist");
    cy.getByCy("todo-error").should(
      "have.text",
      "You dont have anything you need to do",
    );
  });
});
