import React from 'react';

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.toggled = false;
  }

  componentDidMount() {
    if (this.props.match.params.noteId) {
      this.props.fetchNote(this.props.match.params.noteId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.noteId && this.props.match.params.noteId !== nextProps.match.params.noteId) {
      nextProps.fetchNote(nextProps.match.params.noteId);
    }
  }

  handleResize(event) {
    event.preventDefault();

    const navbar = document.getElementById("navbar");
    const sidebar = document.getElementById("sidebar-container");
    const main = document.getElementById("notes-main");

    if (this.toggled) {
      navbar.classList.remove("navbar-go-to-zero");
      sidebar.classList.remove("sidebar-go-to-zero");
      main.classList.remove("notes-move-over");
    } else {
      navbar.classList.add("navbar-go-to-zero");
      sidebar.classList.add("sidebar-go-to-zero");
      main.classList.add("notes-move-over");
    }

    this.toggled = !this.toggled;
  }

  render() {
    const note = this.props.current;
      if (!note) {
        return (
          <div>Loading...</div>
        );
      } else {
        return (
          <div id="notes-main">
            <div id="notes-header">
              <div id="note-actions">
                <i className="fa fa-star" />
                <i className="fa fa-trash" onClick={() => this.props.deleteNote(note.id)} />
              </div>
              <i className="fa fa-expand green" onClick={e => this.handleResize(e)} />
            </div>
            <div id="note-body">
              <form>
                <input type="text" id="text" name="title" className="title" value={note.title} />
                <br />
                <input type="textarea" id="body" name="body" className="body" value={note.body} />
              </form>
            </div>
          </div>
          );
      }
    }
}

export default Notes;
