import React from 'react'

const Hoisting = () => {
  return (
    <div>
      <div>
        <h3 style={{color:"purple"}}>Hoisting</h3>
        <p>
          <ul>
            <li>Hoisting is JavaScript’s default behavior of moving all declarations to the top of the current scope.</li>
            <li>JavaScript declaration are Hoisted</li>
            <li>This Means that you can use variables or call a function before it is declared in your code.</li>
            <li>console.log(x) // output: undefined</li>
            <li>after i declared var x;</li>
            <li>so result is undefined</li>
            <li>When will create variable’s with var key word. it will be stored in global window and its default value "undefined"</li>
            <li>when will create variable’s with let, const key word. it will be stored in Scripts and it also default value "undefined".</li>
          </ul>
        </p>
      </div>
    </div>
  )
}

export default Hoisting