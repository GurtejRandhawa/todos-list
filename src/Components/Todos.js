import React from 'react';
import TodoItem from './TodoItem';

export default function Todos(props) {
  let myStyle = {
    minHeight: '35.7vh',
    margin: '80px auto',
  };
  return (
    <div className='container' style={myStyle}>
      {/* {props.todos.length === 0
        ? ''
        : props.todos.map((item) => {
            return (
              <TodoItem todo={item} key={item.sno} onDelete={props.onDelete} />
            );
          })
      } */}
      {props.todos.map((item) => {
        return (
          <TodoItem todo={item} key={item.sno} onDelete={props.onDelete} />
        );
      })}
    </div>
  );
}
