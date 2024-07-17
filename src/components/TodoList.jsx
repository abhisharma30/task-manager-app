import TodoForm from "./TodoForm";
import Todo from "./Todo";
import "../styles/TodoList.css";

function TodoList({ todos, addTodo, updateTodo, removeTodo, completeTodo }) {
  return (
    <div className="container mt-4">
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
