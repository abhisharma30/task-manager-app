import { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    if (!todo.title || !todo.description) return;
    setTodos([todo, ...todos]);
  };

  const updateTodo = (todoId, newValue) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      })
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.isComplete;
    if (filter === "incomplete") return !todo.isComplete;
    return true;
  });

  return (
    <div className="App">
      <Header />
      <div className="todo-app">
        <h1 className="d-flex justify-content-between">
          <span>Todo App: Manage Tasks</span>
          <span className="badge badge-primary">Count: {todos.length}</span>
        </h1>
        <Filter setFilter={setFilter} />
        <TodoList
          todos={filteredTodos}
          addTodo={addTodo}
          updateTodo={updateTodo}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      </div>
    </div>
  );
}

export default App;
