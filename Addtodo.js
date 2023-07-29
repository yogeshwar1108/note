import { useState } from "react";
import React from "react";

function Addtodo() {
  const [input, setInput] = useState({
    title: "",
    description: ""
  });
  const [todos, settodos] = useState([]);

  const ChangeHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const submit = (e) => {
    e.preventDefault();
    if (input.title.trim() !== "" && input.description.trim() !== "") {
      settodos([...todos, input]);
      setInput({
        title: "",
        description: ""
      });
    }
  };

  const Deletetodo = (index) => {
    const Newtodos = [...todos];
    Newtodos.splice(index, 1);
    settodos(Newtodos);
  };

  const EnterButton = (e) => {
    if (e.key === "Enter" || e.key === "Tab") {
      submit(e);
    }
  };

  return (
    <div>
      <h1 className="display-5 text-primary">ADD TO-DO</h1>
      <div className="border border-dark border-4">
        <label htmlFor="titleInput" className="form-label">
          Title:
        </label>
        <input
          className="w-50 mt-1"
          placeholder="Title"
          value={input.title}
          name="title"
          onChange={ChangeHandler}
          onKeyDown={EnterButton}
        />
        <div className="mb-3">
          <label htmlFor="descriptionInput" className="form-label">
            Description
          </label>
          <input
            placeholder="Description"
            value={input.description}
            name="description"
            onChange={ChangeHandler}
            onKeyDown={EnterButton}
          />
        </div>

        <button
          className="bg-primary rounded text-light w-10 m-4"
          onClick={submit}
        >
          Add To-Do
        </button>
      </div>
      {/* Display the saved to-do items */}
      <div className="border border-dark border-5 mt-3 w-80 p-3">
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="border border-primary border-2 rounded mb-2">
              <div>
                <h4>Title: {todo.title}</h4>
                <p>Description: {todo.description}</p>
              </div>
              <button
                className="btn bg-danger rounded m-1"
                onClick={() => Deletetodo(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Addtodo;
