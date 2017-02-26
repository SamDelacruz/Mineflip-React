import React from 'react';

export default (props) => {
  return (
    <tr className='board-row'>
      {props.children}
    </tr>
  );
}
