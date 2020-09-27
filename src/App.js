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
import Portfolio from './components/portfolio/Portfolio';
import GridView from './components/admin/grid/GridView';

function App() {

  const Admin = ({ match }) => (
    <React.Fragment>
      <h1>admin bar</h1>
      <GridView></GridView>
    </React.Fragment>
  );

  const Portfilio = ({ match }) => (
    <React.Fragment>
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
    </React.Fragment>
  );

  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route path='/admin' component={Admin} />
            <Route path='/' component={Portfilio} />
          </Switch>
        </Provider>
      </BrowserRouter>
    </div >
  );
};

export default App;
