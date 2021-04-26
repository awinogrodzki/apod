import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Favourites } from "./pages/favourites";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const App: React.FunctionComponent = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <Switch>
        <Route path="/favourites">
          <Favourites />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </QueryClientProvider>
);
