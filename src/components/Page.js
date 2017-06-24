import React from 'react';
import ButtonQuestion from './Button';

const Page = (props) => (
  <div>
    <section className="section" >
      <h1 className='title has-text-centered'>{props.title}</h1>
      <p className="box has-text-centered" style={{fontSize: '1.2em'}}>{props.text}</p>
      <div className="field is-grouped" >
        <ul style={{ 'width': '100%' }}>
          <li style={{ 'width': '100%' }}>
            {props.buttons.map(b => (<ButtonQuestion url={b.url} text={b.text}/>))}
          </li>
        </ul>
      </div>
      <article className="message">
        <div className="message-header has-text-centered" style={{backgroundColor: '#900C3F'}}>
          <p>Le saviez-vous?</p>
          <button className="delete"></button>
        </div>
        <div className="message-body">{props.info}</div>
      </article>
    </section>
  </div>
);

export default Page;
