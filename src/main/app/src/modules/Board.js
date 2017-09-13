import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  
  constructor() {
	super();
	this.state = {
	   squares: Array(36).fill(null),
	   xIsNext: true,
	};
  }
  
  handleClick(i) {
	    const squares = this.state.squares.slice();
	   
	    squares[i] = squares[i] ? null : 'X';
	    this.setState({
	    	squares: squares,
	    	xIsNext: !this.state.xIsNext,
	    }); 
  }
  
  renderSquare(i) {
	  return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
  }

  render() {
	  
	  const total = calculatePoints(this.state.squares);
	  let status = 'Summa: ' + total;
	    	    
    return (
      <div>
        
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
        <div className="board-row">
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
          {this.renderSquare(16)}
          {this.renderSquare(17)}
        </div>
        <div className="board-row">
        {this.renderSquare(18)}
        {this.renderSquare(19)}
        {this.renderSquare(20)}
        {this.renderSquare(21)}
        {this.renderSquare(22)}
        {this.renderSquare(23)}
      </div>
      <div className="board-row">
        {this.renderSquare(24)}
        {this.renderSquare(25)}
        {this.renderSquare(26)}
        {this.renderSquare(27)}
        {this.renderSquare(28)}
        {this.renderSquare(29)}
      </div>
      <div className="board-row">
        {this.renderSquare(30)}
        {this.renderSquare(31)}
        {this.renderSquare(32)}
        {this.renderSquare(33)}
        {this.renderSquare(34)}
        {this.renderSquare(35)}
      </div>
        <div className="status">{status}</div>
      </div>
    );
  }
}

export class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

render(
  <Game />,
  document.getElementById('root')
);

function calculatePoints(squares) {
  let total = 0;
  const scores = [15, 10, 10, 10, 10, 15,
    20, 15, 15, 15, 15, 20,
    25, 20, 20, 20, 20, 25,
    30, 25, 25, 25, 25, 30,
    40, 30, 30, 30, 30, 40,
    45, 35, 35, 35, 35, 45];
  const allPutts = [10, 15, 20, 25, 30, 35];
  for (let i = 0; i < scores.length; i++) {
     if (squares[i]) {total = total + scores[i]};
  }
  for (let k = 0; k < 6;k++) {
	  let all = true;
	  for (let l = 0; l < 6; l++) {
		  all = all & (squares[k+l] ? true : false);
	  }
	  if (all) {
		  total = total + allPutts[k];
	  }
  }
  return total;
}
