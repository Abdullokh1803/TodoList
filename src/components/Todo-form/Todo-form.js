import React from "react";

const TodoForm = (props) => {
  const { val, setVal, btnAdd, todos, delAll } = props;

  const btnForm = () => {
    btnAdd(val);
    setVal("");
  };

  const handleKeyPress = (e) => (e.key === "Enter" ? btnForm() : null);

  return (
    <div className="todo-form">
      <input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder="New Add ..."
        type="text"
        name=""
        id=""
        onKeyPress={(e) => handleKeyPress(e)}
      />
      <button onClick={btnForm}>Add</button>
      {todos.length > 3 ? <button onClick={()=>delAll()}>Clear All</button> : null}
    </div>
  );
};

export default TodoForm;
