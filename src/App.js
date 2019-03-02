import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AuthenticationBar from './components/authentication/authenticationBar';
import Hero from './components/hero/Hero';

const Home = props => (
  <div>
    <AuthenticationBar />
    <Hero />
  </div>
);
class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    );
  }
}

export default App;
