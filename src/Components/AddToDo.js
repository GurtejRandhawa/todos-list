import React, { useState } from 'react';

export const AddToDo = ({addTodo}) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [isTitleEmpty, setTitleEmpty] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!title) {
      setTitleEmpty(true);
    } else {
      addTodo(title, desc);
      setTitle('');
      setDesc('');
    }
  };

  const alignStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div className='container my-3'>
      <h3
        style={{
          ...alignStyle,
          fontFamily: 'cursive',
          fontSize: '30px',
          margin:'20px auto'
        }}
      >
        Hi There!
      </h3>
      <form onSubmit={submit}>
        <div className={isTitleEmpty ? 'mb-1' : 'mb-3'} style={alignStyle}>
          <input
            type='text'
            className='form-control'
            id='title'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setTitleEmpty(false);
            }}
            placeholder='✍️ Add item...'
            style={{ width: '30%', fontFamily: 'cursive' }}
          />
        </div>
        {isTitleEmpty ? (
          <div
            className='mb-1'
            style={{
              marginLeft: '35%',
              fontFamily: 'cursive',
              color: 'red',
              fontSize: '14px',
            }}
          >
            Title is required !
          </div>
        ) : (
          ''
        )}
        <div className='mb-4' style={alignStyle}>
          <input
            type='text'
            className='form-control'
            id='desc'
            value={desc}
            onChange={(f) => {
              setDesc(f.target.value);
            }}
            placeholder='Add description (optional)'
            style={{ width: '30%', fontFamily: 'cursive' }}
          />
        </div>
        <div style={alignStyle}>
          <button
            style={{ fontFamily: 'cursive' }}
            type='submit'
            className='btn btn-sm btn-success'
          >
            Confirm ✔️  
          </button>
        </div>
      </form>
    </div>
  );
};
