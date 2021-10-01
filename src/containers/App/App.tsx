import React, { Suspense } from 'react';
import { Provider } from 'mobx-react'
import {
  BrowserRouter as Router} from 'react-router-dom'
import './App.scss';
import store from 'store';
import AppRouter from 'utils/RouteSettings';

function App() {
  return (
    <Suspense fallback={null}>
      <Provider {...store}>
          <Router>
            <AppRouter />
          </Router>
      </Provider>
    </Suspense>
  );
}

export default App;
