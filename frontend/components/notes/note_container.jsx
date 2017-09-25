import { connect } from 'react-redux';
import { fetchNote, createNote, deleteNote, updateNote } from '../../actions/note_actions';
import { withRouter } from 'react-router';

import Note from './note';

const mapStateToProps = state => ({
  currentNote: state.entities.notes.currentNote
});

const mapDispatchToProps = dispatch => ({
  createNote: note => dispatch(createNote(note)),
  fetchNote: id => dispatch(fetchNote(id)),
  deleteNote: id => dispatch(deleteNote(id)),
  updateNote: note => dispatch(updateNote(note))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Note));
