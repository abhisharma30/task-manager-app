import { useState, useEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/TodoForm.css";

function TodoForm({ onSubmit, edit }) {
  const [title, setTitle] = useState(edit ? edit.title : "");
  const [description, setDescription] = useState(edit ? edit.description : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: Math.floor(Math.random() * 10000),
      title,
      description,
      isComplete: false,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <Form onSubmit={handleSubmit} className="todo-form">
      <Form.Group controlId="formTodoTitle">
        <Form.Control
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          ref={inputRef}
          className="todo-input"
        />
      </Form.Group>
      <Form.Group controlId="formTodoDescription">
        <Form.Control
          as="textarea"
          rows={2}
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="todo-input"
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="todo-button">
        {edit ? "Update Todo" : "Add Todo"}
      </Button>
    </Form>
  );
}

export default TodoForm;
