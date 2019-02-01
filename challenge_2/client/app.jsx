import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Chart from './components/Chart.jsx'
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      date: [],
      data: []
    }
  }

  componentDidMount() {
    axios.get('/cryto')
    .then(res => {
      this.setState({
        date: Object.keys(res.data.bpi),
        data: Object.values(res.data.bpi)
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  getData(fromDate, toDate) {
    let date = fromDate + toDate;
    axios.get('/cryto/' + date)
    .then(res => {
      this.setState({
        date: Object.keys(res.data.bpi),
        data: Object.values(res.data.bpi)
      })
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
      <Search getData={this.getData.bind(this)} />
      <br/><br/>
      <Chart date={this.state.date} data={this.state.data} />
      <br/>
      <span><i>Powered by CoinDesk</i></span>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

