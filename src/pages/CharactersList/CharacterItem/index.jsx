import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

export const CharacterItem = ({ name, id, image, species }) => 
  (
    <li className="list__item">
      <NavLink to={`character/${id}`}>
        <img src={image} alt={name} className="list__item-img"/>
      </NavLink>
      <NavLink to={`character/${id}`}>
        <h3 className="list__item-name">{name}</h3>
      </NavLink>
      <p className="list__item-species">{species}</p>
    </li>
  );