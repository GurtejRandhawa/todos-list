import React, { useState } from 'react';

export const AddToDo = ({addTodo}) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert('Title or description cannot be empty!');
    }
    else{
    addTodo(title,desc);
    setTitle('');
    setDesc('');
    }
  };

  return (
    <div className='container my-3'>
      <h3>Add an Item :-</h3>
      <form onSubmit={submit}>
        <div className='mb-3'>
          <label htmlFor='title' className='form-label'>
            Todo Title
          </label>
          <input
            type='text'
            className='form-control'
            id='title'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='desc' className='form-label'>
            Todo Description
          </label>
          <input
            type='text'
            className='form-control'
            id='desc'
            value={desc}
            onChange={(f) => setDesc(f.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-sm btn-success'>
          Add Item
        </button>
      </form>
    </div>
  );
};
