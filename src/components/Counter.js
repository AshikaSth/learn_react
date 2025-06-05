import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  // increment(){
  //   this.setState(
  //     {
  //     count: this.state.count + 1
  //     },
  //     () => {
  //       console.log('Callback value', this.state.count)
  //     }
  //   )
  //   console.log(this.state.count)
  // }
  //when clicked on increment button, the console will show 0 five times, and the callback value will be 1. this happens because react will group multiple setState calls into one single update for better performance.
  // in this scenario all the five setState calls are done in one single go and the updated value doesnt carry over between the different setState calls.
  //so whenver you have multiple setState calls in a row, you should use the callback function of setState to get the updated value instead of passing in an object

  increment() {
    this.setState(prevState =>({
      count: prevState.count + 1
    }))
    console.log(this.state.count);
  }
  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    // This will not work as expected because setState is asynchronous
    // console.log(this.state.count)
  }

  render() {
    return (
      <div>
        <div>Count -{this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
