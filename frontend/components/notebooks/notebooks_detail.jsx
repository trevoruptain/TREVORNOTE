import React from 'react';
import NotebookShortSummary from './notebook_short_summary';
import Modal from 'react-modal';

const overlayStyles = {
  overlay : {
    position          : 'absolute',
    top               : 0,
    left              : 0,
    width             : '100vw',
    height            : '100vh',
    display           : 'flex',
    justifyContent    : 'center',
    alignItems        : 'center',
    backgroundColor   : '#FFF',
    zIndex            : 6
  },
  content : {
    position          : 'relative',
    border            : 'none',
    top               : 'none',
    left              : 'none',
    width             : '500px',
    textAlign         : 'center'
  }
};

class NotebooksDetail extends React.Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      notebookTitle: ""
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.

  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentDidMount() {
    setTimeout(() => {
      const sidebar = document.getElementById("notebooks-detail");
      sidebar.classList.add("come-on-in-sidebar");
    }, 100);
  }

  update() {
    return e => this.setState({ notebookTitle: e.currentTarget.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.createNotebook({
      name: this.state.notebookTitle
    });

    this.closeModal();
  }

  render() {
    return (
      <div id="notebooks-detail" onClick={e => e.preventDefault()}>
        <div className="notebook-detail-header">
          <h2>Notebooks</h2>
          <i className="fa fa-plus-square" onClick={this.openModal} />

            <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={overlayStyles}
            contentLabel="Example Modal" >

            <i className="fa fa-book modal-icon" />
            <h3>Create notebook</h3>
            <hr />
            <form onSubmit={e => this.handleSubmit(e)}>
              <input type="text"
                     placeholder="Title your notebook"
                     onChange={this.update()}/>

              <div>
                <button onClick={this.closeModal}>Cancel</button>
                <button type="submit">Create notebook</button>
              </div>
            </form>
          </Modal>

        </div>
        <ul>
          {this.props.notebooks.map(notebook => (
            <li key={notebook.id}>
              <NotebookShortSummary
                notebook={notebook}
                deleteNotebook={this.props.deleteNotebook}
                fetchNote={this.props.fetchNote}
                fetchNotebook={this.props.fetchNotebook}
                />
            </li>
          ))}
        </ul>
      </div>

    );
  }
}

export default NotebooksDetail;
