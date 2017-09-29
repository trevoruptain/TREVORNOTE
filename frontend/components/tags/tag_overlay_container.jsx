import { connect } from 'react-redux';
import { fetchTags,
         fetchTag,
         deleteTag,
         createTag } from '../../actions/tag_actions';
import { withRouter } from 'react-router';

import TagOverlay from './tag_overlay';

const mapStateToProps = state => ({
  tags: Object.values(state.entities.tags)
});

const mapDispatchToProps = dispatch => ({
  fetchTags: () => dispatch(fetchTags()),
  fetchTag: id => dispatch(fetchTag(id)),
  deleteTag: id => dispatch(deleteTag(id)),
  createTag: notebook => dispatch(createTag(notebook))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TagOverlay));
