import React from 'react';
import NavBarContainer from '../nav/nav_bar_container';
import NoteSidebarContainer from '../sidebar/note_sidebar_container';
import NoteContainer from './note_container';
import NotebookOverlayContainer from '../notebooks/notebook_overlay_container';
import NotebookSidebarContainer from '../sidebar/notebook_sidebar_container';
import TagOverlayContainer from '../tags/tag_overlay_container';
import TagSidebarContainer from '../sidebar/tag_sidebar_container';

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.toggled = false;
  }

  componentWillMount() {
    this.props.fetchNotes();
    this.props.fetchNotebooks();
    this.props.fetchTags();
  }

  componentWillReceiveProps(nextProps) {
    this.notebookOverlay = false;
    this.notebookSidebar = false;
    this.noteSidebar = false;
    this.tagOverlay = false;
    this.tagSidebar = false;

    if (nextProps.match.path === "/notes") {
      this.noteSidebar = true;
    } else if (nextProps.match.path === "/notes/:noteId") {
      if (this.props.match.params.noteId !== nextProps.match.params.noteId) {
        this.props.fetchNote(nextProps.match.params.noteId);
      }
      this.noteSidebar = true;
    } else if (nextProps.match.path === "/add-note") {
      this.noteSidebar = true;
    } else if (nextProps.match.path === "/notebooks") {
      this.notebookOverlay = true;
    } else if (nextProps.match.path === "/notebooks/:notebookId") {
      if (this.props.match.params.notebookId !== nextProps.match.params.notebookId) {
        this.props.fetchNotebook(nextProps.match.params.notebookId);
        this.props.fetchNotesByNotebook(nextProps.match.params.notebookId);
      }
      this.notebookSidebar = true;
    } else if (nextProps.match.path === "/notebooks/:notebookId/notes/:noteId") {
      if (this.props.match.params.noteId !== nextProps.match.params.noteId) {
        this.props.fetchNote(nextProps.match.params.noteId);
      }
      this.notebookSidebar = true;
    } else if (nextProps.match.path === "/tags") {
      this.tagOverlay = true;
    } else if (nextProps.match.path === "/tags/:tagId") {
      if (this.props.match.params.tagId !== nextProps.match.params.tagId) {
        this.props.fetchTag(nextProps.match.params.tagId);
        this.props.fetchNotesByTag(nextProps.match.params.tagId);
      }
      this.tagSidebar = true;
    } else if (nextProps.match.path === "/tags/:tagId/notes/:noteId") {
      if (this.props.match.params.noteId !== nextProps.match.params.noteId) {
        this.props.fetchNote(nextProps.match.params.noteId);
      }
      this.tagSidebar = true;
    }
  }

  render() {

    let notebookOverlay;
    let tagOverlay;
    let noteSidebar;
    let notebookSidebar;
    let tagSidebar;

    if (this.notebookOverlay) {
      notebookOverlay = <NotebookOverlayContainer />;
    } else {
      notebookOverlay = null;
    }

    if (this.tagOverlay) {
      tagOverlay = <TagOverlayContainer />;
    } else {
      tagOverlay = null;
    }

    if (this.noteSidebar) {
      noteSidebar = <NoteSidebarContainer />;
    } else {
      noteSidebar = null;
    }

    if (this.notebookSidebar) {
      notebookSidebar = <NotebookSidebarContainer />;
    } else {
      notebookSidebar = null;
    }

    if (this.tagSidebar) {
      tagSidebar = <TagSidebarContainer />;
    } else {
      tagSidebar = null;
    }

    return (
      <div>
        <NavBarContainer />

        { noteSidebar }
        { notebookSidebar }
        { tagSidebar }

        <NoteContainer />

        { notebookOverlay }
        { tagOverlay }
      </div>
    );
  }
}

export default Notes;
