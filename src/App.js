import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';

function App(props) {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
