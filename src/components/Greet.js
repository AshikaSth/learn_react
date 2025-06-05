import React from "react";
const Greet = ({name, heroName}) => {
  
  //props.name = "Ashika"; // This will not change the original prop value
  // props.heroName = "Ashika"; // This will not change the original prop value
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
      
    </div>
  );
};

export default Greet;
