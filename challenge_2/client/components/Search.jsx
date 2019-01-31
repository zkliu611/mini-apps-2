import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromDate: '',
      toDate: ''
    }
  }

  handleChange(e) {
    let key = e.target.id;
    this.setState({
      [key]: e.target.value
    })
  }

  handleClick() {
    this.props.getData(this.state.fromDate, this.state.toDate);
  }

  render() {
    return(
      <div>
        Enter Date Range (yyyy-mm-dd) 
        <br/>
        From: &nbsp;
        <input type="text" id="fromDate" onChange={e=>this.handleChange(e)}></input> &ensp;
        To: &nbsp;
        <input type="text" id="toDate" onChange={e=>this.handleChange(e)}></input> &ensp;
        <button onClick={e=>this.handleClick()}>Search</button>
        <br/>
      </div>
    )
  }
}

export default Search;