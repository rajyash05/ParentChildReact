import React from 'react';

function Child(props) {
   return (
     <>
     <h2>Child Component</h2>
     <h4>Plese enter text in below input to see changes in parent</h4>
     <input placeholder="Enter child Text" value={props.value} onChange={props.onChangeInput}></input>
     </>
   );
};

export default Child;