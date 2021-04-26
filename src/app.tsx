import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from './pages/home';
import { Favourites } from './pages/favourites';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyle } from './styles';
import { DefaultLayout } from './layout/default';

const queryClient = new QueryClient();

export const App: React.FunctionComponent = () => (
  <QueryClientProvider client={queryClient}>
    <GlobalStyle />
    <Router>
      <DefaultLayout>
        <Switch>
          <Route path="/zapisane">
            <Favourites />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </DefaultLayout>
    </Router>
  </QueryClientProvider>
);