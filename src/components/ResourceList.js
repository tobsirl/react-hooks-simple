import React from 'react';

import useResource from './useResources';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

const ResourceList = ({ resource }) => {
  const resources = useResource(resource);

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
