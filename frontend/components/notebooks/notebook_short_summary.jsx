import React from 'react';
import { Link } from 'react-router-dom';

class NotebookShortSummary extends React.Component {
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
            <i className="fa fa-star" />
            <i className="fa fa-trash" onClick={e => this.handleDelete(e)} />
          </div>
        </div>
      </Link>
    );
  }
}

export default NotebookShortSummary;
