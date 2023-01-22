import React from 'react';
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
