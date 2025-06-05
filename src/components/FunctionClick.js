import React from 'react'

function FunctionClick() {
//remeber in js we can define a function inside a function
  function clickHandler() {
    console.log('Button Clicked')
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
