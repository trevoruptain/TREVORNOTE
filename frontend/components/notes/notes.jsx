import React from 'react';

class Notes extends React.Component {
  constructor(props) {
    super(props);
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
              <i className="fa fa-expand green" />
            </div>
            <div id="note-body">
              <h2>{note.title}</h2>
              <p>{note.body}</p>
            </div>
          </div>
          );
      }
    }
}

export default Notes;
