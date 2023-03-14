import { connect } from 'react-redux';
import { selectCharacters, selectSearchedCharacters} from 'store/characters/selectors';
import { sort } from 'pages/utils';

import 'scss/list.scss';
import { CharacterItem } from './CharacterItem';

const Characters = ({ charactersList, searchedCharacters }) => {
  searchedCharacters !== undefined && 
  searchedCharacters.length > 0 
    ? sort(searchedCharacters) 
    : sort(charactersList);

  return (
    <main className="container">
      <div className="characters">
        {charactersList.length === 0 && <div>Empty list</div>}
        <ul className="list">
          {searchedCharacters !== undefined && searchedCharacters.length > 0 
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
            : !searchedCharacters  
              ? <div>There is no such character</div>    
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

export const CharactersList = connect(mapStateToProps)(Characters);