import React from 'react';
import {
    Component
} from 'react';
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top         : '50%',
    left        : '50%',
    right       : 'auto',
    bottom      : 'auto',
    marginRight : '-50%',
    transform   : 'translate(-50%, -50%)',
    padding     : '5% 10%',
    color       :'red'
  }
};

Modal.setAppElement('body')
 
class Logout extends Component  {
  constructor(props) {
    super(props);
    //Initially the modal will not open
    this.state = {
      modalIsOpen: false
    };
    //Let bind these methods to this component
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  //This method will be call by CDM when the page is visited
  openModal() {
      //Set the state to true to allow the modal to open
    this.setState({modalIsOpen: true});
  }
   
  //This method will be call when any of the buttons is clicked
  closeModal(e) {
    //Let get the button that was clicked and save the data-id(return or logout) to a variable
    let action = e.target.getAttribute('data-id')
    //pass the action to the function from the landing component
    this.props.handleUserLogout(action)
    //let reset the modal back to close
    this.setState({modalIsOpen: false});
  }

  //As soon as this component mounts, your work is to call the 
  //method that will open the modal
  componentDidMount() {
    this.openModal()
  }
 
  render() {
    return (
        <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
      >
        <h2 ref={subtitle => this.subtitle = subtitle}>Please Confirm!</h2>
        <p>Do you really want to logout?</p>

         <button data-id="return" className="btn btn-primary" onClick={this.closeModal} >No! Return</button>
         <button data-id="logout" className="btn btn-primary" onClick={this.closeModal} >Yes! Logout</button>
      </Modal>
    );
  }
}


export default Logout;
