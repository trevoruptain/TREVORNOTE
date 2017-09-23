import * as NoteApiUtil from '../util/note_api_util';

export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";

export const receiveNotes = notes => ({
  type: RECEIVE_NOTES,
  notes
});

export const receiveNote = note => ({
  type: RECEIVE_NOTE,
  note
});

export const removeNote = note => ({
  type: REMOVE_NOTE,
  note
});

export const fetchNotes = () => dispatch => (
  NoteApiUtil.fetchNotes().then(notes => dispatch(receiveNotes(notes)))
);

export const fetchNote = id => dispatch => (
  NoteApiUtil.fetchNote(id).then(note => dispatch(receiveNote(note)))
);

export const deleteNote = id => dispatch => (
  NoteApiUtil.deleteNote(id).then(note => dispatch(removeNote(note)))
);

export const createNote = note => dispatch => (
  NoteApiUtil.createNote(note).then(newNote => dispatch(receiveNote(newNote)))
);
