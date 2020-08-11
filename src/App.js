import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Portfolio from './portfolio/Portfolio';
import Art from './art/Art';
import WelcomeLogo from './welcome/WelcomeLogo';
import store from './redux/store';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/portfolio' render={()=><Portfolio arts={store.getState().portfolio.arts}/>} />
          <Route path='/art' component={Art} />
          <Route path='/' component={WelcomeLogo}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
