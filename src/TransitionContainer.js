import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Art from './components/art/Art';
import store from './redux/store';
import PortfolioContainer from './components/portfolio/PortfolioContainer';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

function TransitionContainer({ location }) {
  return <Wrapper>
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={{ enter: 1500, exit: 1500 }}
        classNames="fade">
        <section class="route-section">
          <Switch>
            <Route path='/art' render={() => <Art art={store.getState().art.art}
              prev={store.getState().art.prev}
              next={store.getState().art.next} />} />
            <Route path={['/:category', '/']} render={() => <PortfolioContainer />} />
          </Switch>
        </section>
      </CSSTransition>
    </TransitionGroup>
  </Wrapper>
}

const Wrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

  div.transition-group {
    position: relative;
  }

  section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

export default withRouter(TransitionContainer);