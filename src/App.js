import React, { Component } from 'react';
import Citater from './Citater'
import AddCitater from './AddCitater';
import './App.css'

class App extends Component {
  state = {
    citater: [
      {id: 1, title: "Gold mine", citatText: "Remember, they love money so pretend like you own a gold mine and you’re in the club.", forfatter: "Molly Brown"},
      {id: 2, title: "Don't let go", citatText: "I’ll never let go, Jack. I’ll never let go.", forfatter: "Rose"},
      {id: 3, title: "Survive", citatText: "Promise me you’ll survive. That you won’t give up, no matter what happens. No matter how hopeless.", forfatter: "Jack"},
    ]
  }
  deleteCitat = (id) => {
    const citater = this.state.citater.filter(citat => {
      return citat.id !== id
    });
    this.setState({
      citater
    })
  }
  addCitat = (citat) => {
    citat.id = Math.random();
    let citater = [...this.state.citater, citat];
    this.setState({
      citater
    })
  }
  render() {
    return (
      <div className="citater-app container">
        <h1 className="center red-text italic-text">Citater</h1>
        <Citater citater={this.state.citater} deleteCitat={this.deleteCitat}/>
        <AddCitater addCitat={this.addCitat} />
      </div>
    )
  }
}

export default App
