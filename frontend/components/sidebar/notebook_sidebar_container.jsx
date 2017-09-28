import { connect } from 'react-redux';
import { withRouter } from "react-router";

import NotebookSidebar from './notebook_sidebar';
import { fetchNote,
         deleteNote,
         fetchNotesByNotebook } from '../../actions/note_actions';

import { fetchNotebook } from '../../actions/notebook_actions';

const mapStateToProps = (state) => ({
  currentNote: state.entities.notes.currentNote,
  currentNotebook: state.entities.notebooks.currentNotebook,
  notes: Object.values(state.entities.notes.all).reverse()
});

const mapDispatchToProps = dispatch => ({
  fetchNotebook: id => dispatch(fetchNotebook(id)),
  fetchNote: id => dispatch(fetchNote(id)),
  fetchNotesByNotebook: id => dispatch(fetchNotesByNotebook(id)),
  deleteNote: id => dispatch(deleteNote(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookSidebar));
