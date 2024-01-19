import React from 'react'

const ShallowDeep = () => {
  return (
    <div>
      <div>
        <h3 style={{color:"purple"}}>Shallow Copy</h3>
        <p>
          <ul>
            <li>when changing the value of cloned object/array will reflect into original..</li>
            <li>because both are pointing to same reference object or array</li>
              
                <ul>
                  <li>var arr1 = [1,2,3,4]</li>
                  <li>var arr2 = arr1 </li>
                  <li>arr2[0] = 9;</li>
                </ul>
              
          </ul>
        </p>
      </div>
      <div>
        <h3 style={{color:"purple"}}>Deep Copy</h3>
        <p>
          <ul>
            <li>when changing the value of cloned object will not reflect into original object, because both are pointing to different reference objects.</li>
            <li>because both are pointing to same reference object or array</li>
              <li>First way: "Using Spread Operator (...)
              <ul>
               <li>var arr1 = [1,2,3,4]</li>
               <li>var arr2 = arr1 </li>
                <li>arr2[0] = 9;</li>
              </ul>
              </li>
              <li>Second way: Using Object.assign({},arr)
              <ul>
               <li>{"var arr1 = {a:1, b:2}"}</li>
               <li>{"var arr2 = Object.assign({}, arr1)"}</li>
                <li>arr2.b = 9;</li>
              </ul>
              </li>
              <li>thrid way: Using JSON.parse and JSON.stringify - using nested objects/array
              <ul>
               <li>{"var arr1 = {a:1, b:{c:2}}"}</li>
               <li>{"varvar arr2 = JSON.parse (JSON.stringify (arr1))"}</li>
                <li>arr2.b.c = 9;</li>
                <li>{"newarr = JSON.parse(JSON.stringify(arr))"}</li>
              </ul>
              </li>
          </ul>
        </p>
      </div>
    </div>
  )
}

export default ShallowDeep