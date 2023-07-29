import React  from 'react';
import Addtodo from './components/Addtodo';
import Todolist from './components/Todolist';
import Listoftodo from './components/Listoftodo';


function App() {

  return (
    <div className='row' >
      <div className='container'> 
      <div className="col-sm-4 border border-primary p-5"><Addtodo /></div>
      <div className="col-sm-4"><Todolist  /></div>
      <div className="col-sm-4"><Listoftodo/></div>

    </div>
    </div>
  );
}

export default App;
