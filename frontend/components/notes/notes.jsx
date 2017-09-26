import React from 'react';
import NavBarContainer from '../nav/nav_bar_container';
import NoteSidebarContainer from '../sidebar/note_sidebar_container';
import NoteContainer from './note_container';
import NotebookOverlayContainer from '../notebooks/notebook_overlay_container';

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
      this.notebook = false;
    } else if (nextProps.match.path === "/notebooks") {
      this.notebook = true;
    } else if (nextProps.match.path === "/notes/:noteId") {
      if (this.props.match.params.noteId !== nextProps.match.params.noteId) {
        this.props.fetchNote(nextProps.match.params.noteId);
      }
    }
  }

  render() {

    let notebook;

    if (this.notebook) {
      notebook = <NotebookOverlayContainer />;
    }

    return (
      <div>
        <NavBarContainer />
        <NoteSidebarContainer />
        <NoteContainer />
        { notebook }
      </div>
    );
  }
}

export default Notes;
