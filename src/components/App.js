import React, { useState } from 'react';

const App = () => {
  const [resource, setResource] = useState();
  return (
    <div>
      <div>
        <button onClick={() => setResource({ resource: 'posts' })}>
          Posts
        </button>
        <button onClick={() => setResource({ resource: 'todos' })}>
          Todos
        </button>
      </div>
      {this.state.resource}
    </div>
  );
};

export default App;
