import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }

  handleChange(e) {
    let query = e.target.value;
    this.setState({
      searchTerm: query
    })
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