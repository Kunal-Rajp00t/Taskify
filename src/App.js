import './App.css';
import Header from './HeaderComp';
import Footer from './FooterComp'
import TodoList from './TodoListComp'
import About from './AboutComp'
import { useState } from 'react';
import AddTodo from './AddTodo';
import { useEffect } from 'react';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todo, setTodo] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  const onDelete = (item) => {
    // console.log("I am On Delete on", item);
    setTodo(todo.filter((e) => {
      return e !== item;
    }))

  }
  const addNow = (event) => {
    event.preventDefault();
    let sNo = document.getElementById("sno").value;
    let newtask = document.getElementById("title").value;
    let newdesc = document.getElementById("desc").value;
    if (sNo.length < 1 || newtask.length < 1 || newtask.length > 50 || newdesc.length < 1) { alert("Invalid Input") }
    else {
      const newTask = {
        sno: sNo,
        title: newtask,
        desc: newdesc
      }
      setTodo([...todo, newTask]);

      document.getElementById("sno").value = "";
      document.getElementById("title").value = "";
      document.getElementById("desc").value = "";
      alert("Task is Added");

    }
  }
  return (

    <Router>
      <div className="App">
        <Header title="Taskify" name="Kunal Rajput" url="https://cdn-icons-png.freepik.com/256/11207/11207604.png?semt=ais_hybrid" />
        <Routes>
          <Route exact path='/addTask' element={
            <>
              <AddTodo addNow={addNow} />
            </>

          }>
          </Route>
          <Route path="/" element={<>
            <TodoList todo={todo} onDelete={onDelete} />
          </>} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer year={2024} display={true} />
      </div>
    </Router>
  );
}

export default App;