import React from 'react'

const Bind = () => {
  return (
    <div>
      <div>
        <h3 style={{color:"purple"}}>Bind</h3>
        <h5>When I want to call a function inside an object, <br/>sometimes I miss the 'this' context of the object. <br/>so that a particular situation, we can use the 'bind' method.</h5>
        <p>
          <ul>
            <li>I take one function. function name outer function</li>
            <li>and take one object also.</li>
            <li>object have properties and values</li>
            <li>first property given name: given some name</li>
            <li>second property getname: it has anonyms function. it returns outer function. so this.outer().</li>
            <li>here this refer to this object. but outer function is not inside the object. it is outside of the object. when i call the inner function that showing result undefined.</li>
            <li>because miss the “this” context of object. so that a particular situation, we can use the 'bind' method.</li>
          </ul>
        </p>
      </div>
    </div>
  )
}

export default Bind