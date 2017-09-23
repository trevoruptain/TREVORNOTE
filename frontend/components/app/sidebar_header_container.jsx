import { connect } from 'react-redux';

import SidebarHeader from './sidebar_header';
import { fetchNotes } from '../../actions/note_actions';

const mapStateToProps = (state) => ({
  notes: Object.values(state.entities.notes)
});

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarHeader);
