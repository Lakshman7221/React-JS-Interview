import React from 'react'

const Variables = () => {
  return (
    <div>
    <div>
      <h3 style={{color:"purple"}}>Var</h3>
      <p>
        <ul>
          <li>Doesn’t have any kind of Restrictions functions or Blocking activity.</li>
          <li>It is Global level declaration.</li>
        </ul>
      </p>
    </div>
    <div>
      <h3 style={{color:"purple"}}>Let</h3>
      <p>
        <ul>
          <li>Let & const is ES6,ES7 Feature.</li>
          <li>When i create Let variable have some kind of restrictions function or block level restriction.</li>
          <li>Exp: When i create let variable inside the function. then Outside of the function I can’t using let variable.</li>
        </ul>
      </p>
    </div>
    <div>
      <h3 style={{color:"purple"}}>Const</h3>
      <p>
        <ul>
          <li>Once create const variable then i can't Reassign the same variable. it's kind of some Restriction</li>
        </ul>
      </p>
    </div>
  </div>
  )
}

export default Variables