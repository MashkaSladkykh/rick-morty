import {connect} from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import '../../scss/form.scss';
import { generateApiUrl } from '../utils';
import {selectSetSearchQuery, selectSearchedCharacters} from '../../store/characters/selectors';
import { setSearchQuery, setSearchedCharacters} from '../../store/characters/actions';

const Form = ({setSearchQuery, setSearchedCharacters, searchQuery}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = e => {
    const search = {
      character: e.target.value,
    };
    setSearchParams(search, { replace: true });

    setSearchQuery(e.target.value);
    
    fetch(generateApiUrl(`character/?name=${e.target.value}`))
      .then(response => response.json())
      .then(data => {
        setSearchedCharacters(data.results);
      });
  };

  return (
    <form action="" className="search">
      <input 
        className="search__field" 
        type="text" 
        placeholder="Filter by name..."  
        onChange={handleChange} 
        value={searchQuery}/>           
    </form>
  );
};



const mapStateToProps = state => ({
  searchQuery: selectSetSearchQuery(state),
  searchedCharacters: selectSearchedCharacters(state),
});

const mapDispatchToProps = {
  setSearchQuery,
  setSearchedCharacters,
};

export const Search = connect(mapStateToProps, mapDispatchToProps)(Form);

