import React from 'react';
import Modal from 'react-modal';



class OptionModal extends React.Component {
  
  goose = () => {
    window.open('https://who-cares04.firebaseapp.com/', '_blank');
  } 
  render() {
    let c1 = Math.floor(Math.random() * (96 - 54) + 54);
  let c2 = Math.floor(Math.random() * (96 - 54) + 54);
  let love;
  if (c1 > c2) {
    love = 0;
  }  else {
    love = 1
  }
    return (
      <Modal
        isOpen={!!this.props.selectedOption}
        onRequestClose={this.props.handleClearSelectedOption}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
      >
        <h3 className="modal__title">{(c1 == c2) ? 'Both' : this.props.options[love]} Cares!</h3>
        {this.props.selectedOption && <p className="modal__body">{this.props.options[0]} - {c1}%</p>}
        {this.props.selectedOption && <p className="modal__body">{this.props.options[1]} - {c2}%</p>}
        <button className="button" onClick={this.props.handleClearSelectedOption}>Okay</button>
      </Modal>
    );
  }

  
}

export default OptionModal;
