
import './App.css';
import { useState } from 'react';

function App() {
  const [todo,setTodo]=useState('')
  const [todos,setTodos]=useState([])

  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
    </div>
    <div className="input">
      <input value={todo} onChange={(e)=>{setTodo(e.target.value)}} type="text" placeholder="🖊️ Add item..." />
      <i onClick={()=>{setTodos([...todos,{id:Date.now(),text:todo,status:false}])}} className="fas fa-plus"></i>
    </div>
    <div className="todos">
      {
        todos.map((obj)=>{

        return( <div className="todo">
        <div className="left">
          <input value={obj.status} onChange={(e)=>{
            console.log(e.target.checked);
            console.log(obj);
           
          }} type="checkbox" name="" id="" />
          <p>{obj.text}</p>
        </div>
        <div className="right">
          <i className="fas fa-times"></i>
        </div>
      </div>)})}
    </div>
  </div>
  );
}

export default App;
