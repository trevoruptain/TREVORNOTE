import React from 'react';
import NoteSummaryItem from './note_summary_item';

class TagSidebar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tags: this.props.tags
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
        <div id="notebook-header">
          <h2>{this.state.currentNotebook.name}</h2>
          <h4>{this.state.currentNotebook.notes.length} notes</h4>
        </div>
        <div id="note-list">
          <ul>
            {
              this.state.notes.map(note => (
                <NoteSummaryItem
                  key={note.id}
                  type={`notebooks/${this.state.currentNotebook.id}/notes`}
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

export default TagSidebar;
