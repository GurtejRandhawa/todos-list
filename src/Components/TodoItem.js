import React from 'react';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

export default function TodoItem(props) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <Card style={{ margin: '10px auto', borderWidth: '2px' }}>
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
            <Card.Title>
              {!isChecked ? props.todo.title : <del>{props.todo.title}</del>}
            </Card.Title>
            <Card.Text>
              {!isChecked ? props.todo.desc : <del>{props.todo.desc}</del>}
            </Card.Text>

            <button
              style={{
                //marginLeft: '95%',
                visibility: isChecked ? 'visible' : 'hidden',
              }}
              className='btn btn-sm btn-danger'
              onClick={() => props.onDelete(props.todo)}
            >
              Delete
            </button>
            <text style={{marginLeft:'83%'}}>{props.todo.date}</text>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
