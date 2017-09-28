import React from 'react';
import Textarea from 'react-textarea-autosize';

class Note extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: ""
    };

    this.toggled = false;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.path === "/add-note" && this.props.match.path !== "/add-note") {
      this.toggleResize();
      this.props.createNote(Object.assign({}, {title: "", body: "", notebook_id: this.props.currentNotebook.id}));
    } else if (nextProps.currentNote && !this.props.currentNote || this.props.currentNote.id !== nextProps.currentNote.id) {
      this.setState({ title: nextProps.currentNote.title,
                      body: nextProps.currentNote.body });
    }
  }

  switchNotebook(id) {
    this.props.fetchNotebook(id);
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

    const note = {
      id: this.props.currentNote.id,
      notebook_id: this.props.currentNote.notebook_id,
      title: this.state.title,
      body: this.state.body
    };

    if (this.toggled) {
      this.toggleResize();
    }

    this.props.updateNote(note)
    .then(() => {
      if (this.props.match.path === "/add-note") {
        this.props.history.push(`/notes/${note.id}`);
      }
    });
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  render() {
    // setTimeout(() => {
    //   const div = document.getElementById("notes-main");
    //
    //   if (div) {
    //     div.classList.remove("css-transitions-only-after-page-load");
    //   }
    // }, 20);

    return (
      <div id="notes-main"
           className="css-transitions-only-after-page-load">
        <div id="notes-header">
          <div id="note-actions">
            <i className="fa fa-star" />
            <i className="fa fa-trash"
               onClick={() => {
                 this.props.deleteNote(this.props.currentNote.id);
               }} />
          </div>
          <i className="fa fa-expand green resize-button"
             onClick={() => this.toggleResize()} />
        </div>
        <div id="note-toolbox">
        </div>
        <div id="note-body">
          <form onSubmit={this.handleSubmit}>
            <input type="text"
                   className="title"
                   value={this.state.title}
                   onChange={this.update("title")}
                   placeholder="Title your note"
                   autoFocus />
            <br />
            <Textarea className="note-body"
                      value={this.state.body}
                      onChange={this.update("body")}
                      placeholder="Drag files here or just start typing..." />
            <br />
            <input type="submit"
                   id="save-button"
                   value="Save"/>
          </form>
        </div>
      </div>
    );
  }
}

export default Note;
