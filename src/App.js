import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import SearchBar from "./components/searchbar/index.js";

class App extends Component {
  render() {
    return (
      <div>
        <Button variant="contained" color="primary">
          Hello Sky Lambda
        </Button>

        <SearchBar />
      </div>
    );
  }
}

export default App;
