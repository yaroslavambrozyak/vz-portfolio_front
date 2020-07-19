import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Portfolio from './portfolio/Portfolio';
import PreloadContainer from './preload/PreloadContainer';
import NavBar from './navbar/NavBar';
import Art from './art/Art';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/art' component={Art} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

;

export default App;
