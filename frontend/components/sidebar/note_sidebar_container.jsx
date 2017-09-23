import { connect } from 'react-redux';

import NoteSidebar from './note_sidebar';
import { fetchNotes, deleteNote, createNote } from '../../actions/note_actions';

const mapStateToProps = (state) => ({
  notes: Object.values(state.entities.notes)
});

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes()),
  deleteNote: id => dispatch(deleteNote(id)),
  createNote: note => dispatch(createNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteSidebar);
