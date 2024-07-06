import React from 'react';

// Helmet component that updates the document title
const Helmet = (props) => {
  document.title = props.title + ' - Pizz@Pulse'; // Sets the document title
  return <div className='w-100'>{props.children}</div>; // Renders children components
};

export default Helmet; // Exports the Helmet component
