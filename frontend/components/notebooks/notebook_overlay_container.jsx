import { connect } from 'react-redux';
import { fetchNotebooks, deleteNotebook } from '../../actions/notebook_actions';
import { withRouter } from 'react-router';

import NotebookOverlay from './notebook_overlay';

const mapStateToProps = state => ({
  notebooks: Object.values(state.entities.notebooks.all)
});

const mapDispatchToProps = dispatch => ({
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  deleteNotebook: id => dispatch(deleteNotebook(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookOverlay));
