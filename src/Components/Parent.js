import React from 'react';
import Child from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      InputValue: '',
    }
  }
  handleChangeOfInput = (e) => {
    e.preventDefault();
    this.setState({
      InputValue: e.target.value,
    });
  }
  render() {
    const InputValueChild = this.state.InputValue;
    return (
      <>
      <h2>Hi, Changes reflected to data in parent</h2>
      <h2>{InputValueChild}</h2>
      <Child value={InputValueChild} onChangeInput={this.handleChangeOfInput}></Child>
      </>
    );
  }
};

export default Parent;