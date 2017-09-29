import React from 'react';
import TagsDetail from './tags_detail';

class TagOverlay extends React.Component {

  componentWillMount() {
    this.props.fetchTags();
  }

  handleClick(event) {
    event.preventDefault();
    setTimeout(() => {
      this.props.history.push("/notes");
    }, 300);

    const sidebar = document.getElementById("tags-detail");
    sidebar.classList.remove("come-on-in-sidebar");
  }

  render() {
    return (
      <div>
        <div id="tag-overlay" onClick={e => this.handleClick(e)} />
          <TagsDetail
            tags={this.props.tags}
            createTag={this.props.createTag}
            deleteTag={this.props.deleteTag}
            fetchTag={this.props.fetchTag} />
      </div>
    );
  }
}

export default TagOverlay;
