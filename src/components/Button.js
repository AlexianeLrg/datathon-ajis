import React from 'react';
import {Link} from 'react-router-dom';

const ButtonQuestion = (props) => (
  <p className="control" style={{ margin: '5px', marginLeft : '400px' }}>
    <Link to={props.url}  className='button is-medium is-warning'>{props.text}</Link>
  </p>
);

export default ButtonQuestion;
