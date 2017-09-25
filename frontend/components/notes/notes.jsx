import React from 'react';
import Textarea from 'react-textarea-autosize';
import NavBar from '../nav/nav_bar';
import NoteSidebarContainer from '../sidebar/note_sidebar_container';

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.toggled = false;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.fetchNotes();

    if (this.props.match.params.noteId) {
      this.props.fetchNote(this.props.match.params.noteId);
    }

    if (this.props.location.pathname === "/add-note") {
      this.toggleResize();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname === "/notes" && !this.props.location.pathname === "/notes") {
      this.props.fetchNotes();
    } else if (nextProps.location.pathname === "/add-note") {
      this.toggleResize();
    } else if (nextProps.match.params.noteId) {
      if (this.props.match.params.noteId !== nextProps.match.params.noteId) {
        this.props.fetchNote(nextProps.match.params.noteId);
      }
    } else if (!this.props.note) {
      this.props.fetchNote(nextProps.note.id);
    }
  }

  toggleResize() {
    const navbar = document.getElementById("navbar");
    const sidebar = document.getElementById("sidebar-container");
    const main = document.getElementById("notes-main");
    const button = document.getElementById("save-button");

    if (this.toggled) {
      navbar.classList.remove("navbar-move-over");
      sidebar.classList.remove("sidebar-move-over");
      main.classList.remove("notes-move-over");
      button.classList.remove("you-too-button");
    } else {
      navbar.classList.add("navbar-move-over");
      sidebar.classList.add("sidebar-move-over");
      main.classList.add("notes-move-over");
      button.classList.add("you-too-button");
    }

    this.toggled = !this.toggled;
  }

  handleSubmit(event) {
    event.preventDefault();

    const noteId = this.props.current.id;

    const note = Object.assign({}, this.props.current, {
      id: noteId
    });

    if (this.toggled) {
      this.toggleResize();
    }

    this.props.updateNote(note).then(updatedNote => {
      this.updateProps(updatedNote);
    });
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  render() {
    setTimeout(() => {
      const div = document.getElementById("notes-main");

      if (div) {
        div.classList.remove("css-transitions-only-after-page-load");
      }
    }, 20);

    const note = this.props.note;

    if (!note) {
      return (
        <div></div>
      );
    } else {
      return (
        <div>
          <NavBar />
          <NoteSidebarContainer />
          <div id="notes-main"
               className="css-transitions-only-after-page-load">
            <div id="notes-header">
              <div id="note-actions">
                <i className="fa fa-star" />
                <i className="fa fa-trash"
                   onClick={() => {
                     this.props.deleteNote(note.id);
                   }} />
              </div>
              <i className="fa fa-expand green resize-button"
                 onClick={() => this.toggleResize()} />
            </div>
            <div id="note-body">
              <form onSubmit={this.handleSubmit}>
                <input type="text"
                       className="title"
                       value={note.title}
                       onChange={this.update("title")}
                       placeholder="Title your note"
                       autoFocus />
                <br />
                <Textarea className="note-body"
                          value={note.body}
                          onChange={this.update("body")}
                          placeholder="Drag files here or just start typing..." />
                <br />
                <input type="submit"
                       id="save-button"
                       value="Save"/>
              </form>
            </div>
          </div>
        </div>
        );
      }
    }
}

export default Notes;
