import React from 'react';
import NavBarContainer from '../nav/nav_bar_container';
import NoteSidebarContainer from '../sidebar/note_sidebar_container';
import NoteContainer from './note_container';

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.toggled = false;
  }

  componentWillMount() {
    this.props.fetchNotes();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.path === "/notes/:noteId") {
      if (this.props.match.params.noteId !== nextProps.match.params.noteId) {
        this.props.fetchNote(nextProps.match.params.noteId);
      }
    } 
  }

  render() {
    setTimeout(() => {
      const div = document.getElementById("notes-main");

      if (div) {
        div.classList.remove("css-transitions-only-after-page-load");
      }
    }, 20);

    return (
      <div>
        <NavBarContainer />
        <NoteSidebarContainer />
        <NoteContainer />
      </div>
    );
  }
}

export default Notes;
