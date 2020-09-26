import React, { Component } from 'react';
import UpperDiv from './components/UpperDiv'
import Input from './components/Input'
import Display from './components/Display'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: null
    }
  }


  componentWillMount() {
    document.body.style.backgroundColor = "#282c34";
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = null;
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }


  handleInputChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value
      }
    )
  }
  
  
  render() {
    const {inputValue} = this.state
    return (
      <div className="app-container">
        < UpperDiv />
        <div className="input-box-container">
          <form onSubmit={this.handleSubmit}>
                <p>Insert your text here:</p>
                <input type="text" className="input-box" name="inputValue" onChange={this.handleInputChange} />
          </form>
        </div>
        <div className='display'>
          {inputValue}
        </div>
        <div className='display-background'>
          {inputValue}
        </div>
        {/* < Display /> */}
      </div>
    );
    }
}

export default App;
