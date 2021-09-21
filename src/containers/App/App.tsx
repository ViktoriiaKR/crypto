import React, { Suspense } from 'react';
import { Provider } from 'mobx-react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.css';
import store from '../../store';
import SearchPage from './../search-page'

function App() {
  return (
    <Suspense fallback={null}>
      <Provider {...store}>
          <Router>
            <Switch>
              <Route component={SearchPage} path="/" />
            </Switch>
          </Router>
      </Provider>
    </Suspense>
  );
}

export default App;
