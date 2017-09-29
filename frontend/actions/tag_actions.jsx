import * as TagApiUtil from '../util/tag_api_util';

export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";
export const REMOVE_TAG = "REMOVE_TAG";
export const RECEIVE_TAGGING = "RECEIVE_TAGGING";
export const REMOVE_TAGGING = "REMOVE_TAGGING";

export const receiveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
});

export const receiveTag = tag => ({
  type: RECEIVE_TAG,
  tag
});

export const removeTag = tag => ({
  type: REMOVE_TAG,
  tag
});

export const receiveTagging = tagging => {
  return {
    type: RECEIVE_TAGGING,
    tagging
  };
};

export const removeTagging = tagging => {
  return {
    type: REMOVE_TAGGING,
    tagging
  };
};

export const fetchTags = () => dispatch => (
  TagApiUtil.fetchTags()
  .then(tags => dispatch(receiveTags(tags)))
);

export const fetchTag = id => dispatch => (
  TagApiUtil.fetchTag(id)
  .then(tag => dispatch(receiveTag(tag)))
);

export const deleteTag = id => dispatch => (
  TagApiUtil.deleteTag(id)
  .then((tag) => dispatch(removeTag(tag)))
);

export const createTag = note => dispatch => (
  TagApiUtil.createTag(note)
  .then(newTag => dispatch(receiveTag(newTag)))
);

export const updateTag = note => dispatch => (
  TagApiUtil.updateTag(note)
  .then(updatedTag => dispatch(receiveTag(updatedTag)))
);


export const addTagToNote = (noteId, tagName) => dispatch => {
  return TagApiUtil.addTagToNote(noteId, tagName).then(
    tagging => dispatch(receiveTagging(tagging))
  );
};

export const removeTagFromNote = (noteId, tagName) => dispatch => {
  return TagApiUtil.removeTagFromNote(noteId, tagName).then(tagging =>
    dispatch(removeTagging(tagging))
  );
};
