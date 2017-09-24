import { connect } from 'react-redux';
import { withRouter } from "react-router";

import Notes from './notes';
import { fetchNote,
         deleteNote,
         createNote,
         updateNote } from '../../actions/note_actions';

const mapStateToProps = (state) => ({
  current: state.entities.notes.current
});

const mapDispatchToProps = dispatch => ({
  fetchNote: id => dispatch(fetchNote(id)),
  deleteNote: id => dispatch(deleteNote(id)),
  updateNote: note => dispatch(updateNote(note)),
  createNote: note => dispatch(createNote(note))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Notes));
