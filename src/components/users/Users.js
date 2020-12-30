import React, { useContext } from 'react';
import Useritem from './Useritem';
import Spinner from '../layout/Spinner';

import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { users, loading } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={style}>
        {users.map((user) => (
          <Useritem key={user.id} users={user} />
        ))}
      </div>
    );
  }
};

const style = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;