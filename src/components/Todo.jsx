import { useState } from "react";
import { Card } from "react-bootstrap";
import { Edit, Delete } from "@mui/icons-material";
import TodoForm from "./TodoForm";
import "../styles/Todo.css";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    title: "",
    description: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      title: "",
      description: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <Card
      className={`todo-row ${todo.isComplete ? "complete" : ""}`}
      key={index}
    >
      <Card.Body className="todo-content" onClick={() => completeTodo(todo.id)}>
        <div className="todo-text">
          <Card.Text>
            <span className="font-weight-bold">{todo.title}</span>:{" "}
            {todo.description}
            {todo.isComplete ? (
              <span className=" ml-2 badge badge-secondary">Completed</span>
            ) : (
              ""
            )}
          </Card.Text>
        </div>
        <div className="icons">
          <Edit
            onClick={(e) => {
              e.stopPropagation();
              setEdit({
                id: todo.id,
                title: todo.title,
                description: todo.description,
              });
            }}
            className="edit-icon"
          />
          <Delete
            onClick={(e) => {
              e.stopPropagation();
              removeTodo(todo.id);
            }}
            className="delete-icon"
          />
        </div>
      </Card.Body>
    </Card>
  ));
};

export default Todo;
