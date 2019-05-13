import { useState, useEffect } from 'react';

const useResource = resource => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async resource => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/${resource}`
      );
      const data = await res.json();
      return setResources(data);
    })(resource);
  }, [resource]);

  return resources;
};

export default useResource;
