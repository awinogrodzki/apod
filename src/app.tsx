import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './pages/home';
import { Favourites } from './pages/favourites';
import { QueryClient, QueryClientProvider } from 'react-query';
import styled from 'styled-components';
import { GlobalStyle } from './styles';
import { Header } from './layout/header';

const Container = styled.div`
  width: 960px;
  max-width: 100%;
  margin: 0 auto;
`;

const queryClient = new QueryClient();

export const App: React.FunctionComponent = () => (
  <QueryClientProvider client={queryClient}>
    <GlobalStyle />
    <Router>
      <Header />
      <Container>
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
  </QueryClientProvider>
);