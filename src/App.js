import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import WelcomeLogo from './components/welcome/WelcomeLogo';
import NavBarContainer from './components/navbar/NavBarContainer';
import Art from './components/art/Art';
import PortfolioContainer from './components/portfolio/PortfolioContainer';
import TransitionWrapper from './components/common/transition/TransitionWrapper';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <WelcomeLogo />
          <NavBarContainer />
          <Route render={({ location }) => (
            <TransitionWrapper location={location}>
              <Switch location={location}>
                <Route path='/art' render={() =>
                  <Art art={store.getState().art.art} prev={store.getState().art.prev} next={store.getState().art.next} />
                }
                />
                <Route path={['/:category', '/']} render={() =>
                  <PortfolioContainer />
                } />
              </Switch>
            </TransitionWrapper>
          )}>
          </Route>
        </Provider>
      </BrowserRouter>
    </div >
  );
};

export default App;
