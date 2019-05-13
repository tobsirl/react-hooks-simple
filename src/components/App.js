import React, { useState } from 'react';

import ResourceList from './ResourceList';
import UserList from './UserList';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const App = () => {
  const [resource, setResource] = useState('posts');

  console.log(resource);
  return (
    <div>
      <UserList />
      <div>
        <Button
          variant="outlined"
          color="default"
          onClick={() => setResource('posts')}
        >
          Posts
        </Button>
        <Button
          variant="outlined"
          color="default"
          onClick={() => setResource('todos')}
        >
          Todos
        </Button>
      </div>
      <TextField
        id="standard-bare"
        className={resource}
        margin="normal"
        value={resource}
      />
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
