import { connect } from 'react-redux';
import { withRouter } from "react-router";

import Notes from './notes';
import { fetchNote,
         fetchNotes,
         deleteNote,
         createNote,
         updateNote } from '../../actions/note_actions';

const mapStateToProps = (state) => ({
  note: state.entities.notes.current,
  notes: state.entities.notes.all
});

const mapDispatchToProps = dispatch => ({
  fetchNote: id => dispatch(fetchNote(id)),
  fetchNotes: () => dispatch(fetchNotes()),
  deleteNote: id => dispatch(deleteNote(id)),
  updateNote: note => dispatch(updateNote(note)),
  createNote: note => dispatch(createNote(note))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Notes));
