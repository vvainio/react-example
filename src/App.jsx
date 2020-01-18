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
import AuthService from './services/AuthService';

export default function App() {
  return (
    <Router>
      <div>
        { AuthService.isAuthenticated && <Header /> }

        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <AuthenticatedRoute exact path="/">
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
