import { SET_CHARACTERS, SEARCHED_CHARACTERS, SET_CHARACTER_DETAILS } from './types';

const initialState = {
  characters: [],
  searchedCharacters: [],
  characterDetails: {},
};

export const characters = (state = initialState, action) => {
  switch (action.type) {
  case SET_CHARACTERS:
    return {
      ...state,
      characters: action.payload,
    };
  case SEARCHED_CHARACTERS:
    return {
      ...state,
      searchedCharacters: action.payload,
    };
  case SET_CHARACTER_DETAILS:
    return{
      ...state,
      characterDetails: action.payload,
    };
  default:
    return state;
  }
};