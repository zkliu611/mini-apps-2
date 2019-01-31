import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }


  render () {
    return (
    <div>
      <h1>Mini Apps 2 Challenge 2</h1>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

