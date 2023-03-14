import {connect} from 'react-redux';
import { useEffect, useState } from 'react';
import { useSearchParams, useLocation} from 'react-router-dom';
import { generateApiUrl } from 'pages/utils';
import {selectSearchedCharacters, selectCharacters} from 'store/characters/selectors';
import {setSearchedCharacters, setCharacters} from 'store/characters/actions';

import './styles.scss';

const Form = ({setSearchedCharacters, setCharacters}) => {
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
  searchedCharacters: selectSearchedCharacters(state),
  characters: selectCharacters(state),
});

const mapDispatchToProps = {
  setSearchedCharacters,
  setCharacters,
};

export const Search = connect(mapStateToProps, mapDispatchToProps)(Form);

