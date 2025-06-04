import React from "react";
const Greet = (props) => {
  console.log(props);
  //props.name = "Ashika"; // This will not change the original prop value
  // props.heroName = "Ashika"; // This will not change the original prop value
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
