import React from 'react';
import ButtonQuestion from './Button';

const Page = (props) => (
  <div>
    <section className="section">
      <h1 className='title has-text-centered'>{props.title}</h1>
      <p className="box has-text-centered" style={{fontSize: '1.5em'}}>{props.text}</p>
      <div className="field is-grouped">
        <ul>
          <li>
            {props.buttons.map(b => (<ButtonQuestion url={b.url} text={b.text}/>))}
          </li>
        </ul>
      </div>
      <article className="message">
        <div className="message-header has-text-centered" style={{backgroundColor: '#900C3F'}}>
          <p>Le saviez-vous?</p>
          <button className="delete"></button>
        </div>
        <div className="message-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
        </div>
      </article>
    </section>
  </div>
);

export default Page;
