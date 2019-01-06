import React, { Component } from 'react';

const GIHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
console.log(GIHUB_TOKEN);

class App extends Component {
  render() {
    return (
      <div>Hello GraphQL</div>
    );
  }
}

export default App;
