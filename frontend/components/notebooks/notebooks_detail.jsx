import React from 'react';
import NoteShortSummary from '../notes/note_short_summary';

class NotebooksDetail extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      const sidebar = document.getElementById("notebooks-detail");
      sidebar.classList.add("come-on-in-sidebar");
    }, 100);
  }

  render() {
    return (
      <div id="notebooks-detail" onClick={e => e.preventDefault()}>
        <div className="notebook-detail-header">
          <h2>Notebooks</h2>
          <i className="fa fa-plus-square" />
        </div>
        <ul>
          {this.props.notebooks.map(notebook => (
            <li key={notebook.id}>
              <NoteShortSummary
                notebook={notebook}
                deleteNotebook={this.props.deleteNotebook}
                />
            </li>
          ))}
        </ul>
      </div>

    );
  }
}

export default NotebooksDetail;
