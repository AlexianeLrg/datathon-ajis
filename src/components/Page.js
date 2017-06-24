import React from 'react';
import ButtonQuestion from './Button';

const Page = (props) => (
  <section className="section">
    <p className="box">{props.text}</p>
    <div className="field is-grouped">
      {props.buttons.map(b => (<ButtonQuestion url={b.url} text={b.text}/>))}
    </div>
  </section>
);

export default Page;
