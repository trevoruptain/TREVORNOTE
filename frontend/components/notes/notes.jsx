import React from 'react';

class Notes extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <div>
        <h2>Notes Are Here</h2>
      </div>
    );
  }
}

export default Notes;
