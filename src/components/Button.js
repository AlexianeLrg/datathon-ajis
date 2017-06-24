import React from 'react';
import {Link} from 'react-router-dom';

const ButtonQuestion = (props) => (
  <p className="control">
    <Link to={props.url} className='button is-large is-warning'>{props.text}</Link>
  </p>
);

export default ButtonQuestion;
