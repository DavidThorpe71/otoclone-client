import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';

import './App.css';
import GigGrid from './components/GigGrid';
import SingleGig from './components/SingleGig';

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={GigGrid} />
        <Route path="/events/single" component={SingleGig} />
      </div>
    </Router>
  </Provider>
)

export default App;
