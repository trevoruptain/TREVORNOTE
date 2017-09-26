import React from 'react';
import NavBarContainer from '../nav/nav_bar_container';
import NoteSidebarContainer from '../sidebar/note_sidebar_container';
import NoteContainer from './note_container';
import NotebookOverlayContainer from '../notebooks/notebook_overlay_container';
// import NotebookSidebar from '../notebooks/notebook_sidebar';

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
    } else if (nextProps.match.path === "/notes/:noteId") {
      if (this.props.match.params.noteId !== nextProps.match.params.noteId) {
        this.props.fetchNote(nextProps.match.params.noteId);
      }
      this.noteSidebar = true;
    } else if (nextProps.match.path === "/notebooks") {
      this.notebookOverlay = true;
    } else if (nextProps.match.path === "/notebooks/:notebookId") {
      this.notebookSidebar = true;
      this.noteSidebar = false;
    }
  }

  render() {

    let notebookOverlay;
    let noteSidebar;

    if (this.notebookOverlay) {
      notebookOverlay = <NotebookOverlayContainer />;
    }

    if (this.noteSidebar) {
      noteSidebar = <NoteSidebarContainer />;
    }

    return (
      <div>
        <NavBarContainer />

        { noteSidebar }

        <NoteContainer />

        { notebookOverlay }
      </div>
    );
  }
}

export default Notes;
