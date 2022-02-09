import React from 'react';
import Card from 'react-bootstrap/Card';

export default function TodoItem(props) {
  return (
    <>
      <Card style={{margin:'10px auto',borderWidth:'2px'}}>
        <Card.Body>
          <Card.Title>{props.todo.title}</Card.Title>
          <Card.Text>{props.todo.desc}</Card.Text>
          <button
            className='btn btn-sm btn-danger mt-3'
            onClick={() => props.onDelete(props.todo)}
          >
            Delete
          </button>
        </Card.Body>
      </Card>
    </>
  );
}
