import React from 'react';
import Textarea from 'react-textarea-autosize';

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.toggled = false;

    this.state = {
      title: "",
      body: "",
      current: this.props.current
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if (this.props.match.params.noteId) {
      this.props.fetchNote(this.props.match.params.noteId)
      .then(action => this.setState({title: action.note.title, body: action.note.body}));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.noteId && this.props.match.params.noteId !== nextProps.match.params.noteId) {
      nextProps.fetchNote(nextProps.match.params.noteId)
      .then(action => this.setState({title: action.note.title, body: action.note.body, current: action.note}));
    } else {
      this.setState({title: nextProps.current.title, body: nextProps.current.body, current: nextProps.current});
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

  handleSubmit(event) {
    event.preventDefault();

    const noteId = this.props.current.id;

    const note = Object.assign({}, this.state, {
      id: noteId
    });

    this.props.updateNote(note);
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
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
              <form onSubmit={this.handleSubmit}>
                <input type="text" className="title" value={this.state.title} onChange={this.update("title")} />
                <br />
                <Textarea className="note-body" value={this.state.body} onChange={this.update("body")}/>
                <br />
                <input type="submit" className="save-button" value="Save"/>
              </form>
            </div>
          </div>
          );
      }
    }
}

export default Notes;
