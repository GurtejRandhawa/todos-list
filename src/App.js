import Header from './Components/Header';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import React, { useState, useEffect } from 'react';
import { AddToDo } from './Components/AddToDo';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  let initTodo;
  if (localStorage.getItem('todosArray') === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem('todosArray'));
  }

  const onDelete = (todo) => {
    console.log('Delete Pressed', todo);
    setTodosArray(
      todosArray.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem('todosArray', JSON.stringify(todosArray));
  };

  const addTodo = (title, desc) => {
    let sno;
    if (todosArray.length === 0) {
      sno = 0;
    } else {
      sno = todosArray[todosArray.length - 1].sno + 1;
    }    
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      date: new Date().toLocaleString() + '',
    };
    setTodosArray([...todosArray,myTodo]);
    console.log(myTodo);
  };

  const [todosArray, setTodosArray] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem('todosArray', JSON.stringify(todosArray));
  }, [todosArray]);

  return (
    <>
      <Router>
        <Header title='To-Do list' searchBar={false} />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <AddToDo addTodo={addTodo} />
                <Todos todos={todosArray} onDelete={onDelete} />
              </>
            }
          ></Route>
          <Route exact path='/about' element={<About />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
