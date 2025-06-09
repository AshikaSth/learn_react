import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

  // This is the constructor method, it is called when the component is created
  constructor(props) {
    super(props)
  
    this.state = {
       name : 'Ashika'
    }
    console.log('LifeCycleA constructor')
  }

  //make sure to include the static keyword or this method will be ignored

  static getDerivedStateFromProps(props, state) {
    console.log('LifeCycleA getDerivedStateFromProps')
    return null
  }

  componentDidMount(){
    console.log('LifeCycleA componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('LifeCycleA shouldComponentUpdate')
    return true // or false based on your logic
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('LifeCycleA getSnapshotBeforeUpdate') 
    return null // or some value to be used in componentDidUpdate
  }

  componentDidUpdate() {
    console.log('LifeCycleA componentDidUpdate')
  }

  changeState = () => {
    this.setState({
      name: 'Learn React'
    })


  }


  
  render() {
    console.log('LifeCycleA render')
    return ( 
      <div>
        <div>LifeCycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB/>
        {/* This is how you can nest components Lifecyclea as parent component and LifeCYcleB as child component*/}
      </div>
    )
  }
  //because the render method knows about thechild component, the execution passes on to the children component after the parent component's render method is executed
  //child component lifecyle is executed after the parent component's render method is executed
  //then componentDidMount method of the parent component is executed at the end
}

export default LifeCycleA
