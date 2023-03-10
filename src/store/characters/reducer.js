import { SET_CHARACTERS, SET_SEARCH_QUERY, SEARCHED_CHARACTERS } from './types';

const initialState = {
  characters: [],
  searchQuery: '',
  searchedCharacters: [],
};

export const characters = (state = initialState, action) => {
  switch (action.type) {
  case SET_CHARACTERS:
    return {
      ...state,
      characters: action.payload,
    };
  case SET_SEARCH_QUERY:
    return {
      ...state,
      searchQuery: action.payload,
    };
  case SEARCHED_CHARACTERS:
    return {
      ...state,
      searchedCharacters: action.payload,
    };
  default:
    return state;
  }
};