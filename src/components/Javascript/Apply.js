import React from 'react'
import "../../index.css"
const Apply = () => {
  return (
    <div>
    <div>
      <h3 style={{color:"purple"}}>APPLY</h3>
      <h5>apply method similar to call method. <br/> but apply method won't create new function. it will execute immediately by setting the "this" keyword.</h5>
      <h6>Example ----------------</h6>
      <p>
        <ul>
          <li>I take number array</li>
          <li>Now I want to find the max number in the array</li>
          <li>"I want to use the max method, but it doesn't take an array directly."</li>
          <li>"In that particular situation, I can use the apply method."</li>
          <li>Syntax: Math.max.apply(null, arrayName)</li>
          <li>"Main difference: bind and call methods take only values as second arguments."</li>
          <li>"But the apply method takes an array as second argument."</li>
        </ul>
      </p>
    </div>
  </div>
  )
}

export default Apply