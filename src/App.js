import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AuthForm from './components/authentication/AuthForm';

const Home = props => (
  <div>
    <Button>Home</Button>
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={AuthForm} />
      </Router>
    );
  }
}

export default App;
