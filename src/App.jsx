import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './features/todoSlice';
import './App.css';

function App() {
  const [toDo, setToDo] = useState('');
  const dispatch = useDispatch();
  const toDos = useSelector((state) => state.todos.todos);

  const handleAddTodo = () => {
    if (toDo.trim()) {
      dispatch(addTodo(toDo));
      setToDo('');
    }
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <h2> Add the to dos ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={handleAddTodo} className="fas fa-plus"></i>
      </div>

      <div className="todos">
        {toDos.map((todo) => (
          <div className="todo" key={todo.id}>
            <div className="left">
              <input
                type="checkbox"
                checked={todo.status}
                onChange={() => dispatch(toggleTodo(todo.id))}
              />
              <p>{todo.text}</p>
            </div>
            <div className="right">
              <i
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="fas fa-times"
              ></i>
            </div>
          </div>
        ))}

        <div className="checked-items">
          {toDos
            .filter((todo) => todo.status)
            .map((todo) => (
              <h3
                key={todo.id}
                style={{
                  color: 'white',
                  textDecoration: 'line-through',
                  marginTop: '8px',
                }}
              >
                {todo.text}
              </h3>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
