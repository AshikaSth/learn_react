import React, { createElement } from 'react';

const Hello = () => {
  // return (
  //   <h1>Hello HI</h1>
  // )

  return React.createElement(
    'div',
    {id: 'hello', className : 'dummyClass'},
    React.createElement('h1', null, 'Hello cat'))
}

export default Hello
// This is a simple React component that renders a heading with the text "Hello Ashika".
// It can be used in a React application to display a greeting message.