import React from 'react';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <div id="note-header">
        <h2>Notes</h2>
        <h4>{this.props.notes.length} notes</h4>
      </div>
    );
  }
}

export default Sidebar;
