import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Hello'
    }
    // this.clickHandler = this.clickHandler.bind(this)
  //binding the clickHandler method to the class instance
  }
 

  // clickHandler ()  {
  //   this.setState({
  //     message:'Goodbye'
  //   })
  //   console.log(this)
  //   //this is undefined here 
  // }

  clickHandler = () => {
    this.setState({
      message: 'Goodbye'
    })  
  }
  
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
         {/* <button onClick={this.clickHandler.bind(this)}>Click</button>  */}
         {/* <button onClick={()=> this.clickHandler()}>Click</button> */}
         <button onClick={this.clickHandler}>Click</button>
        
      </div>
    )
  }
}

export default EventBind
