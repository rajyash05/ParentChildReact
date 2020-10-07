import React from 'react';

function Child(props) {
   return <input value={props.value} onChange={props.onChangeInput}></input>;
};

export default Child;