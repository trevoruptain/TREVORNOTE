import React from 'react';

class NoteSummaryItem extends React.Component {
  render() {
    return (
      <li className="note-summary-item">
        <div className="note-container">
          <h4>{this.props.note.title}</h4>
          <h5>Moments ago</h5>
          <p>{this.props.note.body}</p>
        </div>
      </li>
    );
  }
}

export default NoteSummaryItem;
