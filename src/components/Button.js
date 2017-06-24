import React from 'react';
import {Link} from 'react-router-dom';

const ButtonQuestion = (props) => (
  <p className="control">
    <Link to={props.url} className='button is-medium is-warning' style={{marginLeft: '77%'}}>{props.text}</Link>
  </p>
);

export default ButtonQuestion;
