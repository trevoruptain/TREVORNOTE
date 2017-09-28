import {
  RECEIVE_NOTES,
  RECEIVE_NOTE,
  REMOVE_NOTE
} from '../actions/note_actions';

const NotesReducer = (state = { all: {}, currentNote: null }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_NOTES:
      newState.all = action.notes;
      newState.currentNote = Object.values(action.notes).reverse()[0];
      return newState;
    case RECEIVE_NOTE:
      newState.all[action.note.id] = action.note;
      newState.currentNote = action.note;
      return newState;
    case REMOVE_NOTE:
      delete newState.all[action.note.id];
      newState.currentNote = Object.values(state.all).reverse()[0];
      return newState;
    default:
      return state;
  }
};

export default NotesReducer;


// if (!state.currentNote) {
//   newState.currentNote = Object.values(action.notes).reverse()[0];
// }
