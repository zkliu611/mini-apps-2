import React from 'react';
import ReactDOM from 'react-dom';
import ScorePad from './components/ScorePad.jsx';
import ScoreBoard from './components/ScoreBoard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      round: 1,
      ball: 1, 
      knockDown: 0,
      record: [],
      end: false
    }
  }

  handleClick(e) {
    let knockDown = Number(e.target.value);
    let round = this.state.round;
    let ball = this.state.ball;
    let record = this.state.record;
    if (round === 10 && ball === 1 && knockDown === 10) {
      record.push(['X']);
      this.setState({
        knockDown: 0,
        ball: 2,
        record: record,
        round: 10
      })
    } else if (round === 10 && ball === 2 && knockDown === 10) {
      record[9].push('X');
      this.setState({
        knockDown: 0,
        ball: 3,
        round: 10
      })
    } else if (round === 10 && ball === 2 && (this.state.knockDown + knockDown) === 10) {
      record[9].push('S');
      this.setState({
        knockDown: 0,
        ball: 3,
        round: 10
      })
    } else if (round === 10 && ball === 3) {
      record[9].push(knockDown);
      this.setState({
        record: record,
        end: true
      })
    } else if (knockDown === 10) {
      round++;
      record.push(['X'])
      this.setState({
        round: round,
        knockDown: 0,
        ball: 1,
        record: record
      })
    } else if (ball === 2 && (knockDown + this.state.knockDown) === 10) {
      round++;
      record.push([this.state.knockDown, 'S'])
      this.setState({
        round: round,
        knockDown: 0,
        ball: 1
      })
    } else if (ball === 2) {
      round++;
      record.push([this.state.knockDown, knockDown])
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

  }

  render () {
    console.log(this.state)
    return (
    <div>
      <h1>Bowling Score Chart</h1>
      <ScorePad knockDown={this.state.knockDown} handleClick={this.handleClick.bind(this)} />
      <br/>
      <ScoreBoard score={this.state.record} />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



