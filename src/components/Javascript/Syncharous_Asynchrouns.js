import React from 'react'

const SyncharousAsynchrouns = () => {
  return (
    <div>
    <div>
      <h3 style={{color:"purple"}}>Synchronous</h3>
      <p>
        <ul>
          <li>Synchronous means single-threaded. you can only execute one things/program at a time. (it is execute one by one)</li>
          <li>JavaScript is Synchronous and single threaded language.</li>
        </ul>
      </p>
    </div>
    <div>
      <h3 style={{color:"purple"}}>Asynchronous</h3>
      <p>
        <ul><b>Asynchronous means non-blocking. you can execute multiple things/program at a time and It don't have to follow the order.</b>
          <li>Examples of Asynchronous:</li>
            <ul>
                <li>Event Handling (Button Clicks, Form Submissions, Window resizing)</li>
                <li>Fetching Data from server (XML HttpRequest(AJAX), Fetch API)</li>
                <li>Reading or Writing files (file I/O Operations taken some time)</li>
                <li>Timers (setTimeout(), setInterval())</li>
                <li>uploading files</li>
                <li>Animations and Transitions</li>
            </ul>
        </ul>
      </p>
    </div>
  </div>
  )
}

export default SyncharousAsynchrouns