import { useEffect } from 'react';
import { connect } from 'react-redux';

import { selectCharacters} from '../../store/characters/selectors';
import { setCharacters } from '../../store/characters/actions';
import { generateApiUrl } from '../utils';

import { CharacterItem } from './CharacterItem/component';

const Characters = ({ charactersList, setCharacters }) => {
  useEffect(() => {
    fetch(generateApiUrl('character'))
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
      });
  },[setCharacters]);

  return (
    <main className="container">
      <div className="characters">
        {charactersList.length === 0 && <div>Empty list</div>}
        <ul>
          {charactersList.map(({ id, name, species, image}) => 
            (
              <CharacterItem
                key={id}
                id={id}
                name={name}
                species={species}
                image={image}               
              />   
            ))}
        </ul>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  charactersList: selectCharacters(state),
});

const mapDispatchToProps = {
  setCharacters,
};

export const CharactersList = connect(mapStateToProps, mapDispatchToProps)(Characters);