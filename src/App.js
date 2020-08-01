import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Portfolio from './portfolio/Portfolio';
import NavBar from './navbar/NavBar';
import Art from './art/Art';
import WelcomeLogo from './welcome/WelcomeLogo';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/art' component={Art} />
          <Route path='/' component={WelcomeLogo}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
