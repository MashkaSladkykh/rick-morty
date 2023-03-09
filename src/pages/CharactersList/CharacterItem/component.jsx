import * as React from 'react';

export const CharacterItem = ({ name, id, image, species }) => 
  (
    <li>
      <a href="#">
        <img src={image} alt={name} />
      </a>
      <a href="">
        <h3>{name}</h3>
      </a>
      <p>{species}</p>
    </li>
);