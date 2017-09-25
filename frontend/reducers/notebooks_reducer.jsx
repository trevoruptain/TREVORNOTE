import {
  RECEIVE_NOTEBOOKS,
  RECEIVE_NOTEBOOK,
  REMOVE_NOTEBOOK
} from '../actions/notebook_actions';

const NotesReducer = (state = { all: {}, current: null }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_NOTEBOOKS:
      newState.all = action.notebooks;
      if (!state.current) {
        newState.current = Object.values(action.notebooks)[0];
      }
      return newState;
    case RECEIVE_NOTEBOOK:
      newState.all[action.notebook.id] = action.notebook;
      newState.current = action.notebook;
      return newState;
    case REMOVE_NOTEBOOK:
      delete newState.all[action.notebook.id];
      newState.current = Object.values(state.all)[0];
      return newState;
    default:
      return state;
  }
};

export default NotesReducer;
