import { useEffect } from 'react';
import { connect } from 'react-redux';

import { selectCharacters} from '../../store/characters/selectors';
import { setCharacters } from '../../store/characters/actions';
import { generateApiUrl } from '../utils';

const Characters = ({ charactersList, setCharacters }) => {
  useEffect(() => {
    fetch(generateApiUrl('character'))
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
      });
  },[setCharacters]);
  console.log(charactersList)

  return (
    <main className="container">
      <div className="characters">
        {charactersList.length === 0 && <div>Empty list</div>}
        <ul>
          {charactersList.map(({ id, name, species, image}) => 
            (
              <li key={id}>
                <img src={image} alt={name} />
                <h3>{name}</h3>
                <p>{species}</p>
              </li>
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