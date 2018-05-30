/* eslint react/no-did-mount-set-state: 0 */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import logo from './logo.svg';
import './styles/App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './styles/muiTheme';
import rootReducer from './redux/reducers/rootReducer';

import GigGrid from './components/GigGrid';
import SingleGig from './components/SingleGig';
import Button from '@material-ui/core/Button';
import { styles, } from './styles/materialStyles'

const middleware = [logger, thunk];

const store = createStore(
  // Reducers
  rootReducer,
  // Initial state
  {},
  composeWithDevTools(applyMiddleware(...middleware)),
);

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to="/">

            </Link>
          </header>
          <Switch>
            <Route exact path="/" component={GigGrid} />
            <Route path="/:id" component={SingleGig} />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

export default App;

