import React from 'react';

class AddNoteOverlay extends React.Component {

  handleClick(event) {
    if (event.target.id === "overlay-container") {
      this.props.history.push("/notes");
    }
  }

  render() {
    return (
      <div id="overlay-container" onClick={e => this.handleClick(e)}>
        <div id="overlay-form">
          <p>Here's some text</p>
        </div>
      </div>
    );
  }
}

export default AddNoteOverlay;
