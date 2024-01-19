import React from 'react'

const Clousre = () => {
  return (
    <div>
      <div>
        <h3 style={{color:"purple"}}>Clousre</h3>
        <p>
          <ul>
            <li>A closure is a feature in JavaScript where an inner function has access to the outer function's variables, functions and parameters. it is also called scope chain</li>
            <li>Here main purpose of closure - Outer function variable, which is used in an inner function, that variable is saved only in the closure.</li>
            <li>For example: outer function variable x is used in inner function. but y is not used... so only x variable saved in closure. that is main purpose of closure</li>
            <li>
            The closure has three scope chains: Its Own Scope, Outer function variables, Global variables
            </li>
          </ul>
        </p>
      </div>
    </div>
  )
}

export default Clousre