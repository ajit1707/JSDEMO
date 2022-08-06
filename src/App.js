import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';

class App extends Component {
  state = { 
    counters: [ 
        {id: 1, value: 0},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0}
    ]
  } 

  handleDecrement = counter => {
    const counters = [...this.state.counters];
      const index = counters.indexOf(counter)
      counters[index] = { ...counter }
      counters[index].value--;
      this.setState({counters})
  }

  handleIncrement = counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter)
      counters[index] = { ...counter }
      counters[index].value++;
      this.setState({counters})
  }

  handleReset = () => {
      const counters = this.state.counters.map(counters => {
          counters.value = 0;
          return counters
      })
      this.setState({counters})
  }

  handleDelete = counterId => {
      const counters = this.state.counters.filter(counters => counters.id !== counterId)
      this.setState({counters})
  }
  render() {
    return (
      <React.Fragment>
        <NavBar 
        totalCounters={this.state.counters.filter(counters=>counters.value>0).length}/>
        <main className='container'></main> 
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}></Counters>
      </React.Fragment>
    );
  }
}

export default App;
