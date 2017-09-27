import React from 'react';
import NoteSummaryItem from './note_summary_item';

class NotebookSidebar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentNote: this.props.currentNote,
      currentNotebook: this.props.currentNotebook,
      notes: this.props.notes
    };
  }

  componentWillMount() {
    this.props.fetchNotebook(this.props.match.params.notebookId);
    this.props.fetchNotesByNotebook(this.props.match.params.notebookId);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({currenNote: nextProps.currentNote,
                   currentNotebook: nextProps.currentNotebook,
                   notes: nextProps.notes});
  }

  render() {
    return (
      <div id="sidebar-container">
        <div id="note-header">
          <h2>{this.state.currentNotebook.name}</h2>
          <h4>{this.state.currentNotebook.notes.length} notes</h4>
        </div>
        <div id="note-list">
          <ul>
            {
              this.state.notes.map(note => (
                <NoteSummaryItem
                  key={note.id}
                  type="notebook"
                  note={note}
                  deleteNote={this.props.deleteNote}
                  currentNote={this.props.currentNote.id == note.id} />
                ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default NotebookSidebar;
