import React from 'react';
import useResources from './useResources';

const AlbumList = () => {
  const albums = useResources('albums');
  return (
    <ul>
      {albums.map(album => {
        return <li key={album.id}>{album.title}</li>;
      })}
    </ul>
  );
};

export default AlbumList;
