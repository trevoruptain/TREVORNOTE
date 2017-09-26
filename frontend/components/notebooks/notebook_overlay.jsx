import React from 'react';
import NotebooksDetail from './notebooks_detail';

class NotebookOverlay extends React.Component {

  componentWillMount() {
    this.props.fetchNotebooks();
  }

  handleClick(event) {
    event.preventDefault();
    setTimeout(() => {
      this.props.history.push("/notes");
    }, 300);

    const sidebar = document.getElementById("notebooks-detail");
    sidebar.classList.remove("come-on-in-sidebar");
  }

  render() {
    return (
      <div>
        <div id="notebook-overlay" onClick={e => this.handleClick(e)} />
          <NotebooksDetail
            notebooks={this.props.notebooks}
            createNotebook={this.props.createNotebook}
            deleteNotebook={this.props.deleteNotebook} />
      </div>
    );
  }
}

export default NotebookOverlay;
