import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('/cryto')
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err)
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

