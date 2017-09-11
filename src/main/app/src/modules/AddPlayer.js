import React from 'react'
import PlayersInGame from './PlayersInGame'

const AddPlayer = (props) => {
	
  var getInitialState = function() {
    return {
    	itemArray: []
    }
  };
  
  var addPlayer = function(e) {
	  var itemArray = this.state.items
	   
	  itemArray.push(
	    {
	      text: this._inputElement.value,
	      key: Date.now()
	    });
	  
	  this.setState({
		    items: itemArray
	  });
		 
      this._inputElement.value = "";
		 
	  e.preventDefault();
     }

  return (
    <div className="todoListMain">
      <div className="header">
        <form onSubmit={this.addPlayer}>
          <input ref={(a) => this._inputElement = a} placeholder="Enter player">
          </input>
          <button type="submit">add</button>
        </form>
      </div>
      <PlayersInGame entries={this.state.items}/>
    </div>
  )
}

export default AddPlayer
