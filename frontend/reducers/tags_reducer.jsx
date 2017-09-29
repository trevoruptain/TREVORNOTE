import {
  RECEIVE_TAGS,
  RECEIVE_TAG,
  REMOVE_TAG,
  RECEIVE_TAGGING,
  REMOVE_TAGGING
} from '../actions/tag_actions';

const TagsReducer = (state = { all: {}, currentTag: null }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_TAGS:
      newState.all = action.tags;
      if (!state.currentTag) {
        newState.currentTag = Object.values(action.tags)[0];
      }
      return newState;
    case RECEIVE_TAG:
      newState.all[action.tag.id] = action.tag;
      newState.currentTag = action.tag;
      return newState;
    case REMOVE_TAG:
      for(var key in newState.all) {
        if (newState.all[key].id == action.tag.id) {
            delete newState.all[key];
        }
      }
      newState.currentTag = Object.values(state.all)[0];
      return newState;
    case RECEIVE_TAGGING:
      const tag = action.tagging.tag;
      if (!newState.all[tag.id]) {
        newState[tag.id] = tag;
      }
      return newState;
    case REMOVE_TAGGING:
      const removeTag = action.tagging.tag;
      if (newState.all[removeTag.id]) {
        delete newState[removeTag.id];
      }
      return newState;
    default:
      return state;
  }
};

export default TagsReducer;
