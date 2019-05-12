import React, { useState, useEffect } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';




const ResourceList = ({ resource }) => {
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

  return (
    <List component="ul">
      {resources.length}
      {resources.map(resource => {
        return (
          <ListItem button component="li" key={resource.id}>
            {resource.title}
            <Divider />
          </ListItem>
        );
      })}
    </List>
  );
};

export default ResourceList;
