import { SET_CHARACTERS, SET_SEARCH_QUERY, SEARCHED_CHARACTERS } from './types';

export const setCharacters = (payload) => ({
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