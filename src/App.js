import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import WelcomeLogo from './components/welcome/WelcomeLogo';
import NavBarContainer from './components/navbar/NavBarContainer';
import PortfolioContainer from './components/portfolio/PortfolioContainer';
import TransitionWrapper from './components/common/transition/TransitionWrapper';
import GridViewContainer from './components/admin/grid/GridViewContainer';
import AdminPanel from './components/admin/panel/AdminPanel';
import AdminArtContainer from './components/admin/art-admin/AdminArtContainer';
import ArtContainer from './components/art/ArtContainer';
import AdminCategoriesContainer  from './components/admin/category/AdminCategoryContainer';
import AdminProjectContainer from './components/admin/project/AdminProjectContainer';
import AdminArtEditContainer from './components/admin/art-admin/AdminArtEditContainer';

function App() {

  const Admin = ({ match }) => (
    <React.Fragment>
      <AdminPanel />
      <Switch>
        <Route path={'/admin/arts/create'} component={AdminArtContainer} />
        <Route path={['/admin/arts/grid']} component={GridViewContainer} />
        <Route path='/admin/arts/edit/:id' component={AdminArtEditContainer}/>
        <Route path='/admin/categories' component={AdminCategoriesContainer}/>
        <Route path='/admin/projects' component={AdminProjectContainer}/>
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
