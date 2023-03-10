import { SET_CHARACTERS, SET_SEARCH_QUERY, SEARCHED_CHARACTERS, SET_CHARACTER_DETAILS } from './types';

export const setCharacters = payload => ({
  type: SET_CHARACTERS,
  payload,
});

export const setSearchQuery = payload => ({
  type: SET_SEARCH_QUERY,
  payload,
});

export const setSearchedCharacters = payload => ({
  type: SEARCHED_CHARACTERS,
  payload,
});

export const setCharacterDetails = payload => ({
  type: SET_CHARACTER_DETAILS,
  payload,
});