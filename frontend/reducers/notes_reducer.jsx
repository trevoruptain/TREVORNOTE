import {
  RECEIVE_NOTES,
  RECEIVE_NOTE,
  REMOVE_NOTE
} from '../actions/note_actions';

const NotesReducer = (state = { all: {}, current: null }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_NOTES:
      newState.all = action.notes;
      if (!state.current) {
        newState.current = Object.values(action.notes).reverse()[0];
      }
      return newState;
    case RECEIVE_NOTE:
      newState.all[action.note.id] = action.note;
      newState.current = action.note;
      return newState;
    case REMOVE_NOTE:
      delete newState.all[action.note.id];
      newState.current = Object.values(state.all)[0];
      return newState;
    default:
      return state;
  }
};

export default NotesReducer;
