import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App--header">
        <nav className="App--header_navegation">
          <figure className="navegation_boxImg">
            <img src={logo} className="boxImg_logo"/>
          </figure>
          <div className="navegation_boxlist">
            <ul className="boxlist_ul">
              <li className="boxlist_itemList">Link fake 1</li>
              <li className="boxlist_itemList">Link fake 2</li>
              <li className="boxlist_itemList">Link fake 3</li>
              <li className="boxlist_itemList">Link fake 4</li>
            </ul>
          </div>
        </nav>
      </header>
      <main className="App--main">
        <section className="main_sectionSendItens">
          <div className="sectionSendItens_box--centralization">
            <div className="box--centralization_boxBtn">
              <button className="boxBtn_btn">Create Hotspost</button>
            </div>
          </div>
          <div className="sectionSendItens_box--centralization--list">
            <div className="box--centralization--list_boxList">
              <input className="boxList_inputList" placeholder="List of hotspost"></input>
            </div>
          </div>  
        </section>
      </main>
    </div>
  );
}

export default App;
