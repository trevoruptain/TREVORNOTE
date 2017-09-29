import React from 'react';
import { Link } from 'react-router-dom';

class Tag extends React.Component {
  handleDelete(event) {
    event.preventDefault();
    this.props.deleteTag(this.props.tag.id);
  }

  render() {
    return (
      <Link to={`/tags/${this.props.tag.id}`}>
        <div id="tag">
            {this.props.tag.name} <b>{this.props.tag.notes.length}</b>
            <i className="fa fa-trash" onClick={e => this.handleDelete(e)} />
        </div>
      </Link>
    );
  }
}

export default Tag;
