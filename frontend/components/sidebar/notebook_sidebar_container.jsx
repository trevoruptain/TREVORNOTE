import { connect } from 'react-redux';
import { withRouter } from "react-router";

import NotebookSidebar from './notebook_sidebar';
import { fetchNotebooks, deleteNotebook, createNotebook } from '../../actions/note_actions';

const mapStateToProps = (state) => ({
  notes: Object.values(state.entities.notebooks.all).reverse(),
  currentNotebook: state.entities.notes.currentNotebook
});

const mapDispatchToProps = dispatch => ({
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  deleteNotebook: id => dispatch(deleteNotebook(id)),
  createNotebook: note => dispatch(createNotebook(note))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookSidebar));
