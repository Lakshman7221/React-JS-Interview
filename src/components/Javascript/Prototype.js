import React from 'react'

const Prototype = () => {
  return (
    <div>
      <div>
        <h3 style={{color:"purple"}}>Prototype</h3>
        <p>
          <ul>
            <li>proto__ is a hidden property of each object, and each object can access its prototype through __proto__</li>
            <li>Each object in JavaScript has a prototype</li>
            <li>Exp: obj.__proto__.push() – we can access like that.</li>
          </ul>
        </p>
      </div>
    </div>
  )
}

export default Prototype