import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2> Add the to dos ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() =>
            setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])
          }
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((object) => {
          return (
            <div className="todo" key={object.id}>
              <div className="left">
                <input
                  onChange={(e) => {
                    setToDos(
                      toDos.map((obj) => {
                        if (obj.id === object.id) {
                          obj.status = e.target.checked;
                        }
                        return obj;
                      })
                    );
                  }}
                  checked={object.status}
                  type="checkbox"
                />
                <p>{object.text}</p>
              </div>
              <div className="right">
                <i
                  onClick={() =>
                    setToDos(toDos.filter((obj) => obj.id !== object.id))
                  }
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          );
        })}
        {/* Display checked items */}
        <div className="checked-items">
          {toDos
            .filter((object) => object.status)
            .map((object) => (
              <h3 key={object.id} style={{ color: "white",textDecoration:'line-through' }}>
                {object.text}
              </h3>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
