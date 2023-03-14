import { SET_CHARACTERS, SEARCHED_CHARACTERS, SET_CHARACTER_DETAILS } from './types';

export const setCharacters = payload => ({
  type: SET_CHARACTERS,
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