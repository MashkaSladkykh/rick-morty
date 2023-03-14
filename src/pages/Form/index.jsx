import {connect} from 'react-redux';
import { useEffect, useState } from 'react';
import { useSearchParams, useLocation} from 'react-router-dom';
import 'scss/form.scss';
import { generateApiUrl } from 'pages/utils';
import {selectSetSearchQuery, selectSearchedCharacters, selectCharacters} from 'store/characters/selectors';
import { setSearchQuery, setSearchedCharacters, setCharacters} from 'store/characters/actions';

const Form = ({setSearchQuery, setSearchedCharacters, searchQuery, setCharacters}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState('');
  const location = useLocation();

  useEffect(()=>{
    let timeout;
    const search = {
      character: searchValue,
    };
 
    if(!searchValue){
      fetch(generateApiUrl('character'))
        .then(response => response.json())
        .then(data => {
          setCharacters(data.results);
        });
      searchParams.delete('character');
    } else {
      timeout = setTimeout(()=>{
        setSearchParams(search, {replace: true});
        setSearchQuery(searchValue);
        fetch(generateApiUrl(`character/?name=${searchValue}`))
          .then(response => response.json())
          .then(data => {
            setSearchedCharacters(data.results);
          });
      }, 500);
    } if(location.search === ''){
      setSearchedCharacters({})
    }
    return () => clearTimeout(timeout);
  },[searchValue]);
  
  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  return (
    <form action="" className="search">
      <input 
        className="search__field" 
        type="text" 
        placeholder="Filter by name..."  
        onChange={handleChange}
        value={searchValue}/>           
    </form>
  );
};



const mapStateToProps = state => ({
  searchQuery: selectSetSearchQuery(state),
  searchedCharacters: selectSearchedCharacters(state),
  characters: selectCharacters(state),
});

const mapDispatchToProps = {
  setSearchQuery,
  setSearchedCharacters,
  setCharacters,
};

export const Search = connect(mapStateToProps, mapDispatchToProps)(Form);

