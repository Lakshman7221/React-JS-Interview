import React from "react";

const CallBack = () => {
  return (
    <div>
      <div>
        <h3 style={{ color: "purple" }}>Call-back functions</h3>
        <p>
          <ul>
            <li>
              Callbacks, promises and async/wait are doing same job but syntax
              is different. Examples of call-back function
            </li>
            <ul>
              <li>setTimeout()</li>
              <li>setInterval()</li>
            </ul>
          </ul>
        </p>
      </div>
      <div>
        <h3 style={{ color: "purple" }}>Callback Hell</h3>
        <p>
          <ul>
            <li> The callback hell in JavaScript is refer to number of nested callback functions are being executed.
            </li>
            <li>Then code is written very complexly. It is called callback hell.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default CallBack;
