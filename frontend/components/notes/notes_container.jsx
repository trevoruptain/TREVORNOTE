import { connect } from 'react-redux';

import Notes from './notes';
import { fetchNotes } from '../../actions/note_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => ({
  notes: Object.values(state.entities.notes.all),
  currentNote: state.entities.notes.current
});

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Notes));
