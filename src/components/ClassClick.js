import React, { Component } from 'react'

class ClassClick extends Component {
  clickHandler() {
    console.log('Button Clicked in Class Component')
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}
//In class components we use the same event handler syntax as in function components, but we use 'this'
// we put the clickHandler function inside the class not inside the render method
export default ClassClick
