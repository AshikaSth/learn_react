import React from 'react'
import './myStyle.css'


function Stylesheets(props) {
  let className = props.primary ? 'primary' : '';
  return (
    <div>
      <h1 className={`${className} font-xl`}>Stylesheets</h1>
    </div>
  )
}

export default Stylesheets

