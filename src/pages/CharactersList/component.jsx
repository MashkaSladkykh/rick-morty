import { useEffect } from 'react';
import { connect } from 'react-redux';

import { selectCharacters, selectSearchedCharacters} from '../../store/characters/selectors';
import { setCharacters } from '../../store/characters/actions';
import { generateApiUrl, sort } from '../utils';
import '../../scss/list.scss';

import { CharacterItem } from './CharacterItem/component';

const Characters = ({ charactersList, setCharacters, searchedCharacters }) => {
  useEffect(() => {
    fetch(generateApiUrl('character'))
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
      });
  },[setCharacters]);
  searchedCharacters !== undefined && searchedCharacters.length > 0 ? sort(searchedCharacters) : sort(charactersList);

  return (
    <main className="container">
      <div className="characters">
        {charactersList.length === 0 && <div>Empty list</div>}
        <ul className="list">
          {searchedCharacters !== undefined &&  searchedCharacters.length > 0 
            ? 
            searchedCharacters.map(({ id, name, species, image}) => 
              (
                <CharacterItem
                  key={id}
                  id={id}
                  name={name}
                  species={species}
                  image={image}               
                />   
              ))
            :          
            charactersList.map(({ id, name, species, image}) => 
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
  searchedCharacters: selectSearchedCharacters(state),
});

const mapDispatchToProps = {
  setCharacters,
};

export const CharactersList = connect(mapStateToProps, mapDispatchToProps)(Characters);