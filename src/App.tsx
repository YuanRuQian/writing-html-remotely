import React from 'react';
import profilePic from './profile_pic.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={profilePic} className="profile-pic" alt="profile pic" />
      <h2> Hi, I'm Lydia Yuan.</h2>
      <h3>A Master of Software Development student at University of Utah.</h3>
      <h1>Please hire me as your 2023 summer SDE intern!</h1>
      <h4>My info:</h4>
      <ul className='profile-info'>
        <li><a
          className="profile-link"
          href="https://www.overleaf.com/read/ztkmzrkzbmjn"
          target="_blank"
          rel="noopener noreferrer"
        >
          my resume
        </a></li>
        <li>
          <a
            className="profile-link"
            href="https://github.com/YuanRuQian"
            target="_blank"
            rel="noopener noreferrer"
          >
            my GitHub
          </a>
        </li>
        <li>
          <a
            className="profile-link"
            href="mailto:lyidayuan99@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            send me an e-mail
          </a>
        </li>
      </ul>
    </div>
  );
}

export default App;
