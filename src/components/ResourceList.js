import React, { useState, useEffect } from 'react';

const ResourceList = () => {
  const [resources, setResources] = useState([]);

  const getData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/${this.props.resource}`
    );
    const data = await res.json();
    return setResources({ resources: data });
  };

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
