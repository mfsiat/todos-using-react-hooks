import React, { useState } from 'react';
import './App.css';


function Todo({ todo, index }) {
  return (
    <div className="todo">
      { todo.text }
    </div>
  )
}

// it uses the sueState hook 
function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');


  // it handles the form submission which first takes the event pera-meter  
  const handleSubmit = e => {
    e.preventDefault(); //  make sure prevent the default actions 
    if(!value) return; // will not submit for an empty value 
    addTodo(value); // takes the inputted value 
    setValue(''); // after submitting the todo the input becomes empty for taking new todo 
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="input" 
        value={value} 
        placeholder="Add Todo..."
        onChange={e => setValue(e.target.value)}/> 
    </form>
  )
}

function App(){
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: false
    },
    {
      text: 'Build really cool todo app',
      isCompleted: false
    },
  ]);

  // we are updating the state 
  // created newTodo which takes todo and adds on text 
  // then uses setTodos as the new todo 
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App;