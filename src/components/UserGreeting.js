import React, { Component } from "react";
class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {

    //Short circuit evaluation can be used to return different JSX based on the condition
    return this.state.isLoggedIn && <div>Welcome Ashika</div>;

    //ternary operator can be used to return different JSX based on the condition
    //keeps the code clean and readable
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Ashika</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    //element variable can be used to store the JSX code and return it later
    //message variable can be used to store the JSX code and return it later
    // let message
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Ashika</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return (
    //   <div>
    //     {message}
    //   </div>
    // );
    // if else statement can be used to return different JSX based on the condition. adding if else statement to jsx is not valid

    // if(this.state.isLoggedIn) {
    //   return (
    //     <div>Welcome Ashika</div>
    //   )
    // }else{
    //   return (
    //     <div>Welcome Guest</div>
    //   )
    // }
  }
}

export default UserGreeting;
