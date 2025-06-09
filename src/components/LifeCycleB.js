import React, { Component } from 'react'

class LifeCycleB extends Component {

  // This is the constructor method, it is called when the component is created
  constructor(props) {
    super(props)
  
    this.state = {
       name : 'Ashika'
    }
    console.log('LifeCycleB constructor')
  }

  //make sure to include the static keyword or this method will be ignored

  static getDerivedStateFromProps(props, state) {
    console.log('LifeCycleB getDerivedStateFromProps')
    return null
  }

  componentDidMount(){
    console.log('LifeCycleB componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('LifeCycleB shouldComponentUpdate')
    return true // or false based on your logic
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('LifeCycleB getSnapshotBeforeUpdate') 
    return null
  }

  componentDidUpdate() {
    console.log('LifeCycleB componentDidUpdate')
  }

  
  render() {
    return (
      console.log('LifeCycleB render'),
      <div>
        LifeCycleB
      </div>
    )
  }
}

export default LifeCycleB
