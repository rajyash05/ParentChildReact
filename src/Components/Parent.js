import React from 'react';
import Child from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    }
  }
  handleChangeOfInput = (e) => {
    e.preventDefault();
    this.setState({
      inputValue: e.target.value,
    });
  }
  render() {
    const inputValueChild = this.state.InputValue;
    return (
      <>
      <h2>Parent Component</h2>
      <h2>Hi, Changes are reflected below in parent for change of data in child</h2>
      {inputValueChild ? <p>{inputValueChild}</p> : <p>Enter child Text</p>}
      <Child value={inputValueChild} onChangeInput={this.handleChangeOfInput}></Child>
      </>
    );
  }
};

export default Parent;