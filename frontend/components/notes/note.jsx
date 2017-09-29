import React from 'react';
import ReactQuill from 'react-quill';

const toolBarOpts = [
  [{ font: [] }],
  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  ["bold", "italic", "underline", "strike"], // toggled buttons
  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  ["blockquote", "code-block"],
  [{ align: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  ["clean"], // remove formatting button
  ["link", "image", "video", "formula"] // misc
];

const modules = {
  toolbar: toolBarOpts
};

class Note extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      notebook: {},
      tags: []
    };

    this.toggled = false;
    this.dropdown = false;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.dropOptions = this.dropOptions.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.path === "/add-note" && this.props.match.path !== "/add-note") {
      this.toggleResize();
      this.props.createNote(Object.assign({}, {title: "", body: "", notebook_id: this.props.currentNotebook.id}));
    } else if (nextProps.currentNote && !this.props.currentNote || this.props.currentNote.id !== nextProps.currentNote.id) {
      this.setState({ title: nextProps.currentNote.title,
                      body: nextProps.currentNote.body,
                      notebook: nextProps.currentNote.notebook,
                      tags: nextProps.currentNote.tags });
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

    const note = {
      id: this.props.currentNote.id,
      notebook_id: this.state.notebook.id,
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

  update() {
    return e => this.setState({ title: e.currentTarget.value });
  }

  handleChange(value) {
    this.setState({body: value});
  }

  switchNotebook(notebook) {
    this.setState({notebook: notebook})
    .then(() => this.dropOptions());
  }

  dropOptions() {
    const dropdownMenu = document.getElementById("notebook-dropdown");

    if (this.dropdown) {
      dropdownMenu.classList.remove("show-dropdown");
    } else {
      dropdownMenu.classList.add("show-dropdown");
    }

    this.dropdown = !this.dropdown;
  }

  render() {
    const currentNote = this.props.currentNote;

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
          <div className="notebook-select" onClick={() => this.dropOptions()}>
            <i className="fa fa-book" /> {this.state.notebook.name} <b>▼</b>

            <div id="notebook-dropdown">
                {
                  this.props.notebooks.map(notebook => {
                    let selected;
                    if (notebook.id === this.state.notebook.id) {
                      selected = "selected-notebook";
                    }
                    return (
                      <div key={notebook.id}
                           className={`${selected} notebook-option`}
                           onClick={() => this.switchNotebook(notebook)}>
                           {notebook.name}
                      </div>
                    );
                  })
                }
            </div>
          </div>

          <div id="note-tags">
            <ul>
              {
                this.state.tags.map(name => (
                  <li><i className="fa fa-times" /> {name}</li>
                ))
              }
            </ul>
          </div>
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
            <ReactQuill className="note-body"
                      value={this.state.body}
                      onChange={this.handleChange}
                      modules={modules}
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
