import { connect } from 'react-redux';
import { withRouter } from "react-router";

import AddNoteOverlay from './add_note_overlay';
import { createNote } from '../../actions/note_actions';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = dispatch => ({
  createNote: note => dispatch(createNote(note))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNoteOverlay));
