import React from 'react';

class Action extends React.Component {
     handleTab = () => {
    // var a = document.createElement("a");
    // a.href = "http://www.google.com/";
    // var evt = document.createEvent("MouseEvents");
    // //the tenth parameter of initMouseEvent sets ctrl key
    // evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0,
    //                             true, false, false, false, 0, null);
    // a.dispatchEvent(evt);
    window.open('http://www.google.com', '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
}
  render () {
    return (
      <div>
      
        <button
          className="big-button"
          onClick={this.props.handlePick}
          disabled={!(this.props.length == 2)}
        >
      RECK-ON!
      </button>
    </div>
    );
  }
  
};

export default Action;
