import React from 'react'

const Call = () => {
  return (
    <div>
    <div>
      <h3 style={{color:"purple"}}>Call</h3>
      <h5>Call method similar to bind method. but call method won't create new function. it will execute immediately by setting the "this" keyword.</h5>
      <h6>Example ----------------</h6>
      <p>
        <ul>
          <li>I take person object it has one name property</li>
          <li>And I take another function.</li>
          <li>that function I want to return only object property name</li>
          <li>so this.name</li>
          <li>but here this refer to this function. but name is not inside the function. it is outside the object.</li>
          <li>that particular situation i can use call method..</li>
          <li>when call the function fnName.call(ObjectName) then get the result</li>
        </ul>
      </p>
    </div>
  </div>
  )
}

export default Call