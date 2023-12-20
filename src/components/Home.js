import React, { useState, useEffect } from "react";
import TodoForm from "./Todo-form/Todo-form";
import TodoList from "./Todo-list/Todo-list";

const Home = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [val, setVal] = useState("");

  const btnAdd = (inpVal) => {
    console.log("value>>>", inpVal);
    if (inpVal) {
      const newItem = {
        id: Math.random().toString(36).slice(3.9),
        text: inpVal,
        completed: false,
        change: false,
      };
      setTodos([...todos, newItem]);
    }
  };

  useEffect(()=> {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const btnDelete = (id) => {
    setTodos([...todos.filter((elem) => id !== elem.id)]);
  };

  const btnChange = (id) => {
    setTodos([
      ...todos.map((elem) =>
        elem.id === id ? { ...elem, change: true } : { ...elem }
      ),
    ]);
  };

  const btnChangeCompl = (id, text) => {
    setTodos([
      ...todos.map((elem) =>
        elem.id === id ? { ...elem, change: false, text: text } : { ...elem }
      ),
    ]);
  };

  const lineDecor = (id) => {
    setTodos([
      ...todos.map((elem) =>
        elem.id === id ? { ...elem, completed: !elem.completed } : { ...elem }
      ),
    ]);
  };

  const delAll = () => {
    let win = window.confirm('Вы действително хотите удалить?')
    if(win){
      setTodos([])
    }
  }
  console.log(todos);

  return (
    <div className="home">
      <h1>Number of Todos {todos.length}</h1>
      <TodoForm val={val} setVal={setVal} btnAdd={btnAdd} todos={todos} delAll={delAll} />
      {todos.map((elem, i) => {
        return (
          <TodoList
            lineDecor={lineDecor}
            elem={elem}
            key={i}
            btnDelete={btnDelete}
            btnChange={btnChange}
            btnChangeCompl={btnChangeCompl}
          />
        );
      })}
    </div>
  );
};

export default Home;
