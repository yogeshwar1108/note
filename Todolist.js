import React from "react";

function Todolist(props) {
  const handleDelete = (index) => {
    const updatedTodos = [...props.output]; // Create a copy of the array to avoid mutating the original state
    updatedTodos.splice(index, 1); // Remove the element at the specified index
    props.setoutput(updatedTodos);
  };
  return (
    <div className="border border-dark border-5">
      <h1 className="text text-center text-warning">List Of To-Do-List</h1>
      <div >
      {props.output.map((todo, index) => (
        <div  className=" m-4  text-start p-3 m-2 bg-warning border border-warning border-5"
        key={index}>
          <b>
            Title: {todo.title}
            <br />
            Description: {todo.description}
          </b>
          <button onClick={handleDelete}>Delete</button>
        </div>
        
      ))}
      </div>
    </div>
  );
}

export default Todolist;






















// import React from 'react'

// function Todolist(props) {
//   return (
//     <div>
//       <h1>List Of To-Do-List</h1>
//       <div className='card border'>
//         <b>
//         Title: {props.output}
//           <br />
//           Description: {props.output}
//         </b>
//       </div>

//     </div>
//   )
// }

// export default Todolist