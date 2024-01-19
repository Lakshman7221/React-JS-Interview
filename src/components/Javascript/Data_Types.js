import React from "react";

const Data_Types = () => {
  return (
    <div>
      <div>
        <h3 style={{ color: "purple" }}>Data Types</h3>
        <p>
          <ul>
            <li><u>Primitive data type</u></li>
            <ul>
              <li>Numbers, String, Booleans, undefined, Null</li>
              <li>Primitive data types can hold only single value</li>
              <li>Primitive data types are immutable and their value cannot be changed.</li>
              <li>Primitive data types are simple data types.</li>
            </ul>
          </ul>
          <ul>
            <li><u>Non-Primitive data type</u></li>
            <ul>
              <li>Object, Array, Function, Data, RegExp</li>
              <li>Non-primitive data types hold multiple value and methods.</li>
              <li>Non-primitive data types are mutable and there values can be changed.</li>
              <li>Non-primitive data types are complex data types</li>
            </ul>
          </ul>
        </p>
      </div>
      <div>
        <h3 style={{ color: "purple" }}>Data Types</h3>
        <p>
          <li>
            <strong>"String" </strong>
            Represents a sequence of characters. It is written within quotes and
            can be represented using a single or a double quote.
          </li>

          <li>
            <strong>"Number" </strong>
            represent numeric values and can be written with or without
            decimals.
          </li>

          <li>
            <strong>"Boolean" </strong>
            represent a Boolean value, either false or true. This data type is
            generally used for conditional testing.
          </li>

          <li>
            <strong>"Undefined" </strong>
            represents to variable has been declared but not assign a value
          </li>

          <li>
            <strong>"Null" </strong>
            represents to no value / empty value
          </li>

          <li>
            <strong>"NaN" </strong>
            function is used check the number in the argument. If it does not contain number, then it will return true else it will
            return false.
          </li>


          <li>
            <strong>"Typeof" </strong>
            operator can be used to return the description of type of variable
            in string format.
          </li>
        </p>
      </div>
    </div>
  );
};

export default Data_Types;
