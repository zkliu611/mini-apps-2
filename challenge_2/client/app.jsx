import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Chart from './components/Chart.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      date: [],
      data: []
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('/cryto')
    .then(res => {
      // console.log(res.data);
      this.setState({
        date: Object.keys(res.data.bpi),
        data: Object.values(res.data.bpi)
      })
      // console.log(this.state)
    })
    .catch(err => {
      console.log(err)
    })
  }


  render () {
    return (
    <div>
      <h1>Bitcoin Price Chart</h1>
      <br/>
      <Chart date={this.state.date} data={this.state.data} />
      <br/>
      <span><i>Powered by CoinDesk</i></span>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

