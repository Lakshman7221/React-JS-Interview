import React from 'react'

const Promises = () => {
  return (
    <div>
    <div>
      <h3 style={{ color: "purple" }}>Promises</h3>
      <p>
        <ul>
          <li>
          Promises are used for handling asynchronous operations
          </li>
          <ul>
            <li>Event Handling (Button Clicks, Form Submissions, Window resizing)</li>
            <li>Fetching Data from server (XML HttpRequest(AJAX), Fetch API)</li>
            <li>Timers (setTimeout(), setInterval())</li>
            <li>Uploading files</li>
            <li>Animations and Transitions</li>
            <li>Reading files, or waiting for user input</li>
          </ul>
          <li>Promises have Resolve and Reject</li>
          <li>promises can be three states
          <ul>
            <li>Pending (undefined)</li>
            <li>Fulfilled (resolved value)</li>
            <li>Rejected (reason for rejection)</li>
          </ul>
          </li>
          <li>Methods:
          <ul>
            <li>Promise.all()</li>
            <li>Promise.allSettled()</li>
            <li>Promise.any()</li>
            <li>Promise.race()</li>
          </ul>
          </li>
          <li>Chaining of Promises:
            <ul>
              <li>then()</li>
              <li>catch()</li>
              <li>finally()</li>
            </ul>
          </li>
        </ul>
      </p>
    </div>
  </div>
  )
}

export default Promises