import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'
import { firebaseConfig } from 'utils/fb-config'
import './index.scss';
import App from './containers/App/App';
import reportWebVitals from './reportWebVitals';

export const app = firebase.initializeApp(
  firebaseConfig
);

export const Context = createContext<any|null>(null);
const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
    <App />
    </Context.Provider>,
  document.getElementById('root')
);

reportWebVitals();
