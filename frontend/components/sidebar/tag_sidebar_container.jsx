import { connect } from 'react-redux';
import { withRouter } from "react-router";

import TagSidebar from './tag_sidebar';
import { fetchNote,
         deleteNote,
         fetchNotesByTag } from '../../actions/note_actions';

import { fetchTag } from '../../actions/tag_actions';

const mapStateToProps = (state) => ({
  tags: state.entities.tags,
  notes: Object.values(state.entities.notes.all).reverse()
});

const mapDispatchToProps = dispatch => ({
  fetchTag: id => dispatch(fetchTag(id)),
  fetchNote: id => dispatch(fetchNote(id)),
  fetchNotesByTag: id => dispatch(fetchNotesByTag(id)),
  deleteNote: id => dispatch(deleteNote(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TagSidebar));
