import React from 'react';
import Tag from './tag';
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
    zIndex            : 1000
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

class TagsDetail extends React.Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      tagTitle: ""
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentDidMount() {
    setTimeout(() => {
      const sidebar = document.getElementById("tags-detail");
      sidebar.classList.add("come-on-in-sidebar");
    }, 100);
  }

  update() {
    return e => this.setState({ tagTitle: e.currentTarget.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.createTag({
      name: this.state.tagTitle
    });

    this.closeModal();
  }

  render() {
    return (
      <div id="tags-detail" onClick={e => e.preventDefault()}>
        <div className="tag-detail-header">
          <h2>Tags</h2>
          <i className="fa fa-plus-square" onClick={this.openModal} />

            <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={overlayStyles}
            contentLabel="Example Modal" >

            <i className="fa fa-book modal-icon" />
            <h3>Create Tag</h3>
            <hr />
            <form onSubmit={e => this.handleSubmit(e)}>
              <input type="text"
                     placeholder="Title your tag"
                     onChange={this.update()}/>

              <div>
                <button onClick={this.closeModal}>Cancel</button>
                <button type="submit">Create tag</button>
              </div>
            </form>
          </Modal>

        </div>
        <div className="tag-holder">
          <ul>
            {this.props.tags.map(tag => (
              <li key={tag.id}>
                <Tag
                  tag={tag}
                  deleteTag={this.props.deleteTag}
                  fetchNote={this.props.fetchNote}
                  fetchTag={this.props.fetchTag}
                  />
              </li>
            ))}
          </ul>
        </div>
      </div>

    );
  }
}

export default TagsDetail;
