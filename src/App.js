import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import NavBar from './navbar/NavBar';
import TransitionContainer from './TransitionContainer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <NavBar preloadAnimationEnabled={false} />
          <TransitionContainer/>        
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
