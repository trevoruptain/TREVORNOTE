import React from 'react';
import NavBarContainer from '../nav/nav_bar_container';
import NoteSidebarContainer from '../sidebar/note_sidebar_container';
import NoteContainer from './note_container';
import NotebookOverlayContainer from '../notebooks/notebook_overlay_container';
import NotebookSidebarContainer from '../sidebar/notebook_sidebar_container';

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.toggled = false;
  }

  componentWillMount() {
    this.props.fetchNotes();
    this.props.fetchNotebooks();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.path === "/notes") {
      this.notebookOverlay = false;
      this.noteSidebar = true;
      this.notebookSidebar = false;
    } else if (nextProps.match.path === "/notes/:noteId") {
      if (this.props.match.params.noteId !== nextProps.match.params.noteId) {
        this.props.fetchNote(nextProps.match.params.noteId);
      }
      this.noteSidebar = true;
    } else if (nextProps.match.path === "/notebooks") {
      this.notebookOverlay = true;
    } else if (nextProps.match.path === "/notebooks/:notebookId") {
      if (this.props.match.params.notebookId !== nextProps.match.params.notebookId) {
        this.props.fetchNotebook(nextProps.match.params.notebookId);
        this.props.fetchNotesByNotebook(nextProps.match.params.notebookId);
      }
      this.notebookSidebar = true;
      this.notebookOverlay = false;
      this.noteSidebar = false;
    }
  }

  render() {

    let notebookOverlay;
    let noteSidebar;
    let notebookSidebar;

    if (this.notebookOverlay) {
      notebookOverlay = <NotebookOverlayContainer />;
    } else {
      notebookOverlay = null;
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

    return (
      <div>
        <NavBarContainer />

        { noteSidebar }
        { notebookSidebar }

        <NoteContainer />

        { notebookOverlay }
      </div>
    );
  }
}

export default Notes;
