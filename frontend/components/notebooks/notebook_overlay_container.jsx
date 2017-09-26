import { connect } from 'react-redux';
import { fetchNotebooks,
         deleteNotebook,
         createNotebook } from '../../actions/notebook_actions';
import { withRouter } from 'react-router';

import NotebookOverlay from './notebook_overlay';

const mapStateToProps = state => ({
  notebooks: Object.values(state.entities.notebooks.all)
});

const mapDispatchToProps = dispatch => ({
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  deleteNotebook: id => dispatch(deleteNotebook(id)),
  createNotebook: notebook => dispatch(createNotebook(notebook))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookOverlay));
