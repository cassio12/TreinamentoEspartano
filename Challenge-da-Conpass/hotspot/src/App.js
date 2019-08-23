import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-header_navegation">
          <figure className="navegation_boxImg">
            <img src={logo} className="boxImg_logo"/>
          </figure>
          <ul className="navegation_boxlist">
            <li className="boxlist_itemList">Link 1</li>
            <li className="boxlist_itemList">Link 2</li>
            <li className="boxlist_itemList">Link 3</li>
            <li className="boxlist_itemList">Link 4</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
