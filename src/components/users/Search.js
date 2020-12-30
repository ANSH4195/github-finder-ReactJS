import React, { useState, useContext } from 'react';

import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      alertContext.setAlert('Please enter something', 'light');
    } else {
      // This is how you send a prop UP to App.js
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
          style={style}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-light btn-block'
          style={style}
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-danger btn-block'
          onClick={githubContext.clearUsers}
          style={style}
        >
          Clear
        </button>
      )}
      <br />
    </div>
  );
};

const style = {
  borderRadius: '2px',
};

export default Search;
