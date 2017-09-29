import { connect } from 'react-redux';
import { fetchNote, createNote, deleteNote, updateNote } from '../../actions/note_actions';
import { fetchNotebook, fetchNotebooks } from '../../actions/notebook_actions';
import { withRouter } from 'react-router';

import Note from './note';

const mapStateToProps = state => ({
  currentNote: state.entities.notes.currentNote,
  currentNotebook: state.entities.notebooks.currentNotebook,
  notebooks: Object.values(state.entities.notebooks.all),
  tags: Object.values(state.entities.tags.all)
});

const mapDispatchToProps = dispatch => ({
  createNote: note => dispatch(createNote(note)),
  fetchNote: id => dispatch(fetchNote(id)),
  deleteNote: id => dispatch(deleteNote(id)),
  updateNote: note => dispatch(updateNote(note)),
  fetchNotebook: id => dispatch(fetchNotebook(id)),
  fetchNotebooks: () => dispatch(fetchNotebooks())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Note));
