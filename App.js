import React, { useState } from "react";
import Addtodo from "./components/Addtodo";
import Todolist from "./components/Todolist";

function ParentComponent() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="container-fluid m-2 text-center">
      <div className="row">
        <div className="col sm-4">
          <Addtodo setoutput={setTodos}  className="text-center"/>
          </div>
          <div className="col sm-4">
          <Todolist output={todos} setoutput={setTodos} />
        </div>
      </div>
    </div>
  );
}

export default ParentComponent;
