import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class WhoCares extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }));
  };
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid name';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Are you autosexual?';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  };
  
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    const subtitle = 'An ideal love/crush Calculator for the ideal couple  - Made with ♥ by Sathish';

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
            length = {this.state.options.length}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            {(this.state.options.length <= 1) ? <AddOption
              handleAddOption={this.handleAddOption}
              length = {this.state.options.length}
            /> : null}
            
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          options = {this.state.options}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}
