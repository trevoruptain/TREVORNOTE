import React from 'react';
import { Link } from 'react-router-dom';

class NoteShortSummary extends React.Component {
  handleDelete(event) {
    event.preventDefault();
    this.props.deleteNotebook(this.props.notebook.id);
  }

  render() {
    return (
      <Link to={`/notebooks/${this.props.notebook.id}`}>
        <div id="note-short-summary">
          <div>
            <h3>{this.props.notebook.name}</h3>
            <p>{this.props.notebook.notes.length}</p>
          </div>
          <div className="icon-holder">
            <i className="fa fa-trash" onClick={e => this.handleDelete(e)} />
            <i className="fa fa-star" />
          </div>
        </div>
      </Link>
    );
  }
}

export default NoteShortSummary;
