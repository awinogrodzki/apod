import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './pages/home';
import { Favourites } from './pages/favourites';
import styled from 'styled-components';

const Container = styled.div`
  width: 960px;
  max-width: 100%;
  margin: 0 auto;
`;

export const App: React.FunctionComponent = () => (
  <Router>
    <Container>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/zapisane">Favourites</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/zapisane">
          <Favourites />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Container>
  </Router>
);