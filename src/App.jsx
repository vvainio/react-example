import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

import AuthenticatedRoute from './components/AuthenticatedRoute';
import Header from './components/Header';
import AdvancedSearchPage from './pages/AdvancedSearchPage';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <AuthenticatedRoute exact path="/">
            <Header />
            <SearchPage />
          </AuthenticatedRoute>
          <AuthenticatedRoute exact path="/advancedsearch">
            <AdvancedSearchPage />
          </AuthenticatedRoute>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
