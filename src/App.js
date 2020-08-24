import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import NavBar from './components/navbar/NavBar';
import TransitionContainer from './TransitionContainer';
import WelcomeLogo from './components/welcome/WelcomeLogo';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <WelcomeLogo />
          <NavBar preloadAnimationEnabled={false} />
          <TransitionContainer />
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
