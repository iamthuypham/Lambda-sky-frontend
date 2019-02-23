import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AuthForm from './components/authentication/AuthForm';

class App extends Component {
  render() {
    return (
      <>
        <AuthForm />
        {/* <Button variant='contained' color='primary'>
          Hello Sky Lambda
        </Button> */}
      </>
    );
  }
}

export default App;
