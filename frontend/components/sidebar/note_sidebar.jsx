import React from 'react';
import NoteSummaryItem from './note_summary_item';

class NoteSidebar extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <div id="sidebar-container">
        <div id="note-header">
          <h2>Notes</h2>
          <h4>{this.props.notes.length} notes</h4>
        </div>
        <div id="note-list">
          <ul>
            {this.props.notes.map(note => (
              <NoteSummaryItem
                key={note.id}
                note={note}
                deleteNote={this.props.deleteNote}
                currentNote={this.props.match.params.noteId == note.id} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default NoteSidebar;
