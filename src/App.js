import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Art from './art/Art';
import store from './redux/store';
import PortfolioContainer from './portfolio/PortfolioContainer';
import { Provider } from 'react-redux';
import NavBar from './navbar/NavBar'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <NavBar preloadAnimationEnabled={false} />
          <Switch>
            <Route path='/art' render={() => <Art art={store.getState().art.art}
              prev={store.getState().art.prev}
              next={store.getState().art.next} />} />
            <Route path={['/portfolio', '/']} render={() => <PortfolioContainer />} />
          </Switch>
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
