import {
  RECEIVE_NOTEBOOKS,
  RECEIVE_NOTEBOOK,
  REMOVE_NOTEBOOK
} from '../actions/notebook_actions';

const NotebooksReducer = (state = { all: {}, currentNotebook: null }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_NOTEBOOKS:
      newState.all = action.notebooks;
      if (!state.currentNotebook) {
        newState.currentNotebook = Object.values(action.notebooks)[0];
      }
      return newState;
    case RECEIVE_NOTEBOOK:
      newState.all[action.notebook.id] = action.notebook;
      newState.currentNotebook = action.notebook;
      return newState;
    case REMOVE_NOTEBOOK:
      for(var key in newState.all) {
        if (newState.all[key].id == action.notebook.id) {
            delete newState.all[key];
        }
      }
      newState.currentNotebook = Object.values(state.all)[0];
      return newState;
    default:
      return state;
  }
};

export default NotebooksReducer;
