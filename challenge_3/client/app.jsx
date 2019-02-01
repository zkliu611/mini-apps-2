import React from 'react';
import ReactDOM from 'react-dom';
import ScorePad from './components/ScorePad.jsx';
import ScoreBoard from './components/ScoreBoard.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      round: 1,
      ball: 1, 
      knockDown: 0,
      record: [['',''],['',''],['',''],['',''],['',''],['',''],['',''],['',''],['',''],['','','']],
      end: false
    }
  }

  handleClick(e) {
    let knockDown = Number(e.target.value);
    let round = this.state.round;
    let ball = this.state.ball;
    let record = this.state.record;
    if (round === 10 && ball === 1 && knockDown === 10) {
      record[9][0] = 'X';
      this.setState({
        knockDown: 0,
        ball: 2,
        record: record,
        round: 10
      })
    } else if (round === 10 && ball === 2 && knockDown === 10) {
      record[9][1] = 'X';
      this.setState({
        knockDown: 0,
        ball: 3,
        round: 10
      })
    } else if (round === 10 && ball === 2 && (this.state.knockDown + knockDown) === 10) {
      record[9][1] = 'S';
      this.setState({
        knockDown: 0,
        ball: 3,
        round: 10
      })
    } else if (round === 10 && ball === 3) {
      if (record[9][1] === 'X' & knockDown === 10){
        record[9][2] = 'X';
      } else {
        record[9][2] = knockDown;
      }
      this.setState({
        record: record,
        end: true
      })
    } else if (round === 10 && ball === 2 && (this.state.knockDown + knockDown) < 10) {
      record[round - 1] = [this.state.knockDown, knockDown, ''];
      this.setState({
        record: record,
        end: true
      })
    } else if (knockDown === 10) {
      record[round -1] = ['-', 'X'];
      round++;
      this.setState({
        round: round,
        knockDown: 0,
        ball: 1,
        record: record
      })
    } else if (ball === 2 && (knockDown + this.state.knockDown) === 10) {
      record[round - 1] = [knockDown, 'S'];
      round++;
      this.setState({
        round: round,
        knockDown: 0,
        ball: 1
      })
    } else if (ball === 2) {
      record[round -1] = [this.state.knockDown, knockDown];
      round++;
      this.setState({
        ball: 1,
        knockDown: 0,
        round: round
      })
    } else {
      this.setState({
        ball: 2,
        knockDown: knockDown
      })
    }
  }

  newGame() {
    this.setState({
      round: 1,
      ball: 1, 
      knockDown: 0,
      record: [],
      end: false
    })
  }

  render () {
    console.log(this.state.record)
    return (
    <div>
      <h1>Bowling Score Chart</h1>
      <ScorePad knockDown={this.state.knockDown} handleClick={this.handleClick.bind(this)} 
        end={this.state.end} newGame={this.newGame.bind(this)} />
      <br/>
      <ScoreBoard score={this.state.record} />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



