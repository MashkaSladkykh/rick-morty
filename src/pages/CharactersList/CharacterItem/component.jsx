import * as React from 'react';

import '../../../scss/item.scss';

export const CharacterItem = ({ name, id, image, species }) => 
  (
    <li className='list__item'>
        <img src={image} alt={name} className="list__item-img"/>
        <h3 className="list__item-name">{name}</h3>
      <p className="list__item-species">{species}</p>
    </li>
);