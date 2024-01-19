import React from 'react'

const Methods = () => {
  return (
    <div>
      <div>
        <h3 style={{color:"purple"}}>Map</h3>
        <p>
          <ul>
            <li>The map() method is used to creates new array by calling the callback function on every element in the array</li>
            <li>But it doesn’t modify original array</li>
            <li>It crates new array with modify values.</li>
            <li>Map method have 3 arguments: element, index, and array</li>
          </ul>
        </p>
      </div>
      <div>
        <h3 style={{color:"purple"}}>ForEach</h3>
        <p>
          <ul>
            <li>The forEach() method is used to perform action for each element in the array</li>
            <li>but it doesn’t modify original array</li>
            <li>forEach method have 3 arguments: element, index, and array</li>
          </ul>
        </p>
      </div>
      <div>
        <h3 style={{color:"purple"}}>Filter</h3>
        <p>
          <ul>
            <li>The filter() method creates a new array with all elements that pass the test provided by the callback function</li>
            <li>Filter method have 3 arguments: element, index, and array</li>
          </ul>
        </p>
      </div>
      <div>
        <h3 style={{color:"purple"}}>FindIndex</h3>
        <p>
          <ul>
            <li>The findIndex() method will return the first index number of an element in an array that meets a given condition. If no element satisfies the condition, it returns -1.</li>
          </ul>
        </p>
      </div>
      <div>
        <h3 style={{color:"purple"}}>Find</h3>
        <p>
          <ul>
            <li>The find() method will return first value of array that based on given condition. If no element meets the condition, it returns undefined.</li>
            <li>Find method have 3 arguments: element, index, and array</li>
          </ul>
        </p>
      </div>
      <div>
        <h3 style={{color:"purple"}}>Reduce</h3>
        <p>
          <ul>
            <li>reduce() method will returns a new single value. The callback function is calling each element of an array</li>
            <li>reduce method have 4 arguments: accumulator, element, index, and array</li>
          </ul>
        </p>
      </div>
    </div>
  )
}

export default Methods