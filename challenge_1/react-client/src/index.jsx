import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';
import Search from './components/Search.jsx';
import Results from './components/Results.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchTerm: '',
      page: 1,
      data: undefined
    }
  }

  componentDidMount() {

  }

  handleChange(e) {
    let query = e.target.value;
    this.setState({
      searchTerm: query
    })
  }

  handleClick() {
    axios(`http://localhost:3000/events?q=${this.state.searchTerm}&_page=${this.state.page}&_limit=10`)
    .then(res => {
      console.log(res.data);
      this.setState({
        data: res.data
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  render () {
    return (
    <div>
      <h1>Mini Apps 2 Challenge 1</h1>
      <Search handleChange={this.handleChange.bind(this)} handleClick={this.handleClick.bind(this)}/>
      <br/>
      <Results data={this.state.data} />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));