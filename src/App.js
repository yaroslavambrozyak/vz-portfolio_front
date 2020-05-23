import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Portfolio from './portfolio/Portfolio';
import PreloadContainer from './preload/PreloadContainer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={PreloadContainer} />
          <Route path='/portfolio' component={Portfolio} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

;

export default App;
