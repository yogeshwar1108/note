import React, { useState } from "react";

function Addtodo(props) {
  const [input, setinput] = useState({
    title: "",
    description: "",
  });

  const Changeinput = (e) => {
    setinput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const Submit = () => {
    props.setoutput((prevOutput) => [...prevOutput, input]);
    setinput({ title: "", description: "" });
  };

  return (
    <div className="border border-dark border-5">
      <h1 className="text text-center text-primary">ADD TO DO</h1>
      <form>
        <input
          name="title"
          placeholder="title"
          value={input.title}
          onChange={Changeinput}
        ></input>
        <br />
        <br />
        <input
          name="description"
          placeholder="description"
          value={input.description}
          onChange={Changeinput}
        ></input>
      </form>

      <button className="mb-1 btn btn-primary btn-sm m-1" onClick={Submit}>
        ADD
      </button>
    </div>
  );
}

export default Addtodo;
























// import React, { useState } from "react";

// function Addtodo(props) {
//   const [input, setinput] = useState({
//     title: "",
//     description: "",
//   });

//   const Changeinput = (e) => {
//     setinput((e.target.name = e.target.value));
//   };

//   const Submit = () => {
//     // e.preventDefault();
//     props.setoutput(input);
//     setinput({ title: "", description: "" });
//   };

//   return (
//     <div className="border border-dark border-5">
//       <h1 className="text text-center text-primary">ADD TO DO</h1>
//       <form>
//         <input
//           name="title"
//           placeholder="tittle"
//           value={input.title}
//           onChange={Changeinput}
//         ></input>
//         <br />
//         <br />
//         <input
//           name="description"
//           placeholder="description"
//           value={input.description}
//           onChange={Changeinput}
//         ></input>
//       </form>

//       <button className="mb-1 btn btn-primary btn-sm m-1" onClick={Submit}>
//         ADD
//       </button>
//       {/* </div> */}
//     </div>
//   );
// }

// export default Addtodo;
// {
//   /* <div className="border border-dark p-1 m-2">
//         <label>Title:   </label>
//         <input
//           className="mr-2"
//           name="title"
//           value={input.title}
//           onChange={Changeinput}
//         />
//         <br />
//         <label>Description :</label>
//         <input
//           className="mt-2 ml-2" 
//           name="description"
//           value={input.description}
//           onChange={Changeinput}
//         /> */
// }
