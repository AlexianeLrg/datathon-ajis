import React from 'react';

const sectionStyle = {
  height: '60px',
  backgroundImage : 'url("./handiWork.png")',
  backgroundSize: '80px 60px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '30% 70%',
  fontSize: '2.5em',
}
const Header = () => (
  <header className="hero is-warning" style={{ padding: "2rem" }}>
    <h1 className="title has-text-centered" style={sectionStyle}>HandiWork</h1>
  </header>
);

export default Header;
