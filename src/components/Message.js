import React, { Component } from "react";
//we want to create a button called "subscribe" under the tect "Welcome visitor" when clicked on it the message should change to "Thank you for subscribing"
class Message extends Component {
  constructor() {
    super()
    this.state ={
      message : 'Welcome visitor'
    }
  }
  changeMessage() {
    this.setState({
      message: 'Thank you for subscribing'
    })
  }
  render() {
    return(
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>

      </div>
    ) 
  }
}

export default Message;
