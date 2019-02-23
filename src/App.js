import React, { Component } from 'react';
import { Route } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

class App extends Component {
  render() {
    return <Route exact path="/" component={Home} />;
  }
}

export default App;
