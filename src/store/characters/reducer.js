import { SET_CHARACTERS } from './types';

const initialState = {
  characters: [],
};

export const characters = (state = initialState, action) => {
  switch (action.type) {
  case SET_CHARACTERS:
    return {
      ...state,
      characters: action.payload,
    };

  default:
    return state;
  }
};