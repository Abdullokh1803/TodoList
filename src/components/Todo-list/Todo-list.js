import React, { useState } from "react";

const TodoList = (props) => {
  const { elem, btnDelete, btnChange, btnChangeCompl, lineDecor } = props;
  const [input, setInput] = useState(elem.text);

  return (
    <>
      {elem.change ? (
        <div className="todo-list">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            name=""
            id=""
          />
          <button onClick={() => btnChangeCompl(elem.id, input)}>Change</button>
        </div>
      ) : (
        <div className="todo-list">
          <span
            onClick={() => lineDecor(elem.id)}
            className={elem.completed === true ? "decor" : "noDecor"}
          >
            {elem.text}
          </span>
          <button disabled={elem.completed ? true : false}>
            <i
              onClick={() => btnChange(elem.id)}
              className="fa-solid fa-pen fa-1x"
            ></i>
          </button>
          <button disabled={elem.completed ? false : true}>
            <i
              onClick={() => btnDelete(elem.id)}
              className="fa-solid fa-trash fa-1x"
            ></i>
          </button>
        </div>
      )}
    </>
  );
};

export default TodoList;
