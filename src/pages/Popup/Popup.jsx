import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';
import Search from './Search/Search';

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
      </header>
      <div>
        What if the text was here?
      </div>
    </div>
  );
};

export default Popup;
