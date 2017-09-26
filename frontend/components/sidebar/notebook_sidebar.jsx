import React from 'react';
import NoteSummaryItem from './note_summary_item';

class NoteSidebar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentNotebook: this.props.currentNote,
      notebooks: this.props.notebooks
    };
  }

  componentWillMount() {
    this.props.fetchNotes();
  }

  componentWillReceiveProps(newState) {
    this.setState({ currentNote: newState.currentNote, notes: newState.notes });
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
            {this.state.notes.map(note => (
              <NoteSummaryItem
                key={note.id}
                note={note}
                deleteNotebook={this.props.deleteNotebook}
                createNotebook={this.props.createNotebook}
                currentNotebook={this.props.currentNote.id == note.id} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default NoteSidebar;
