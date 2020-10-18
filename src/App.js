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
import GridView from './components/admin/grid/GridView';
import AdminPanel from './components/admin/panel/AdminPanel';
import AdminArtContainer from './components/admin/art-admin/AdminArtContainer';
import ArtContainer from './components/art/ArtContainer';

function App() {

  const Admin = ({ match }) => (
    <React.Fragment>
      <AdminPanel />
      <Switch>
        <Route exact path='/admin/arts' component={AdminArtContainer} />
        <Route path={['/admin/arts/grid', '/admin']} component={GridView} />
      </Switch>
    </React.Fragment>
  );

  const Portfilio = ({ match }) => (
    <React.Fragment>
      <WelcomeLogo />
      <NavBarContainer />
      <Route render={({ location }) => (
        <TransitionWrapper location={location}>
          <Switch location={location}>
            <Route path='/art/:id' component={ArtContainer}/>
            <Route path={['/:types/:type', '/']} render={() =>
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
