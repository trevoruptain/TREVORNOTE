import React from 'react';
import NoteSummaryItem from './note_summary_item';

class TagSidebar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentNote: this.props.currentNote,
      currentTag: this.props.currentTag,
      notes: this.props.notes
    };
  }

  componentWillMount() {
    this.props.fetchTag(this.props.match.params.tagId);
    this.props.fetchNotesByTag(this.props.match.params.tagId);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({currenNote: nextProps.currentNote,
                   currentTag: nextProps.currentTag,
                   notes: nextProps.notes});
  }

  render() {
    return (
      <div id="sidebar-container">
        <div id="notebook-header">
          <h2>{this.state.currentTag.name}</h2>
          <h4>{this.state.currentTag.notes.length} notes</h4>
        </div>
        <div id="note-list">
          <ul>
            {
              this.state.notes.map(note => (
                <NoteSummaryItem
                  key={note.id}
                  type={`tags/${this.state.currentTag.id}/notes`}
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
