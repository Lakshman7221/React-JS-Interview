import React from 'react'

const AsyncWait = () => {
  return (
    <div>
      <div>
        <h3 style={{color:"purple"}}>Async & Wait</h3>
        <p>
          <ul>
            <li>async and await make promises easier to write.</li>
              <ul>
                <li>async function always returns a Promise</li>
                <li>await will take the promise and converts to actual result.</li>
              </ul>
          </ul>
        </p>
      </div>
    </div>
  )
}

export default AsyncWait