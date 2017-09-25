import React from 'react';
import { Link } from 'react-router-dom';

class NoteSummaryItem extends React.Component {

  render() {
    const note = this.props.note;
    let className = "";

    if (this.props.currentNote) {
      className = "selected-note";
    }

    return (
      <Link to={`/notes/${note.id}`}>
        <li className={`note-summary-item ${className}`}>
          <div className="note-container">
            <h4>{note.title}</h4>
            <h5>{note.last_updated}</h5>
            <p>{note.body.slice(0, 150)}</p>
            <div className="note-actions">
              <i className="fa fa-trash" onClick={() => {
                  this.props.deleteNote(note.id).then(() => {
                    window.location = "/#/notes";
                  });
                }}/>
              <i className="fa fa-star" />
            </div>
          </div>
        </li>
      </Link>
    );
  }
}

export default NoteSummaryItem;
