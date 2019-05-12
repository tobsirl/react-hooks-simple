import React, { useState, useEffect } from 'react';

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const getData = async resource => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/${resource}`);
    const data = await res.json();
    return setResources(data);
  };

  useEffect(() => {
    getData(resource);
  }, [resource]);

  return (
    <div>
      {resources.length}
      {resources.map(resource => {
        return <li key={resource.id}>{resource.title}</li>;
      })}
    </div>
  );
};

export default ResourceList;
