import React, {Component} from 'react';
import {CardList} from './Components/Card_list/cardlist';
import {Searchbox} from './Components/Search_box/search_box.component'
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField:''
    }
    this.handleChange = this.handleChange.bind(this);
    // Need to bind the handlechange to the current window to change and set its state 
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users=>this.setState({monsters: users}))
  }

  handleChange = (e) => { 
    this.setState({searchField: e.target.value});
  }

  
  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
      <Searchbox
        placeholder='Search Monster'
        handleChanger={this.handleChange}
      />
      <CardList monsters={filteredMonsters}>
        
        </CardList>
      </div>
    );
  }
}

export default App;
