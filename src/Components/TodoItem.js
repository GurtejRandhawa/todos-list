import React from 'react';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import '../index.css'

export default function TodoItem(props) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <Card
        className='card mask-custom'
        style={{
          margin: '30px auto',
          fontFamily: 'cursive',
          width: '48%',
        }}
      >
        <Card.Body>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              onClick={() => {
                if (isChecked == true) setIsChecked(false);
                else setIsChecked(true);
              }}
              style={{ backgroundColor: isChecked ? 'green' : '' }}
            />
            <Card.Title
              style={{ fontSize: '20px', fontWeight: 'bold', color: '#00e6e6' }}
            >
              {!isChecked ? (
                props.todo.title
              ) : (
                <del style={{ color: 'black' }}>{props.todo.title}</del>
              )}
            </Card.Title>
            <Card.Text style={{ fontSize: '17px', color: '#ffff1a' }}>
              {!isChecked ? (
                props.todo.desc
              ) : (
                <del style={{ color: 'black' }}>{props.todo.desc}</del>
              )}
            </Card.Text>
            <button
              style={{
                visibility: isChecked ? 'visible' : 'hidden',
              }}
              className='btn btn-sm btn-danger'
              onClick={() => props.onDelete(props.todo)}
            >
              Delete
            </button>
            <text style={{ marginLeft: '60%', color: '#00e6e6' }}>
              {props.todo.date}
            </text>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
