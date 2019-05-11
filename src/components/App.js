import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const App = () => {
  const [resource, setResource] = useState('posts');
  console.log(resource);
  return (
    <div>
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
      >
        {resource}
      </TextField>
    </div>
  );
};

export default App;
