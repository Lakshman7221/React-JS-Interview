import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Bind from "./components/Javascript/Bind";
import Apply from "./components/Javascript/Apply";
import Call from "./components/Javascript/Call";
import Closure from "./components/Javascript/Closure";
import HOF from "./components/Javascript/HOF";
import Hoisting from "./components/Javascript/Hoisting";
import Interceptor from "./components/Javascript/Interceptor";
import Prototype from "./components/Javascript/Prototype";
import ShallowDeep from "./components/Javascript/Shallow_Deep";
import AsyncWait from "./components/Javascript/Async_Wait";
import Promises from "./components/Javascript/Promises";
import CallBack from "./components/Javascript/Call_Back";
import DataTypes from "./components/Javascript/Data_Types";
import JavaScript from "./components/Javascript/JavaScript";
import Variables from "./components/Javascript/Variables";
import ArrowFunction from "./components/Javascript/ArrowFunction";
import Function from "./components/Javascript/Function";
import Arrays from "./components/Javascript/Arrays";
import Object from "./components/Javascript/Object";
import NewFetures from "./components/Javascript/NewFetures";
import SpreadOperators from "./components/Javascript/Spread_Operators";
import RestOperators from "./components/Javascript/Rest_Operators";
import TernaryOperators from "./components/Javascript/Ternary_Operators";
import Destructuring from "./components/Javascript/Destructuring";
import TemplateLiterals from "./components/Javascript/Template_Literals";
import SyncharousAsynchrouns from "./components/Javascript/Syncharous_Asynchrouns";
import Methods from "./components/Javascript/Methods";

const App = () => {


  return (
      <Router>
        <Routes>
          <Route path="/React-Js-Interview" element={<Bind/>} >
            <Route path="/bind" element={<Bind/>} />
            <Route path="/apply" element={<Apply/>} />
            <Route path="/call" element={<Call/>} />
            <Route path="/closure" element={<Closure/>} />
            <Route path="/hof" element={<HOF/>} />
            <Route path="/hoisting" element={<Hoisting/>} />
            <Route path="/interceptor" element={<Interceptor/>} />
            <Route path="/prototype" element={<Prototype/>} />
            <Route path="/shallow-deep" element={<ShallowDeep/>} />
            <Route path="/call-back" element={<CallBack/>} />
            <Route path="/promises" element={<Promises/>} />
            <Route path="/async-wait" element={<AsyncWait/>} />
            <Route path="/data-types" element={<DataTypes/>} />
            <Route path="/javascript" element={<JavaScript/>} />
            <Route path="/varibles" element={<Variables/>} />
            <Route path="/function" element={<Function/>} />
            <Route path="/arrow-function" element={<ArrowFunction/>} />
            <Route path="/array" element={<Arrays/>} />
            <Route path="/object" element={<Object/>} />
            <Route path="/new-features" element={<NewFetures/>} />
            <Route path="/spread-operators" element={<SpreadOperators/>} />
            <Route path="/rest-operators" element={<RestOperators/>} />
            <Route path="/ternary-operators" element={<TernaryOperators/>} />
            <Route path="/destructuring" element={<Destructuring/>} />
            <Route path="/template-literals" element={<TemplateLiterals/>} />
            <Route path="/asyncrouns_synchrouns" element={<SyncharousAsynchrouns/>} />
            <Route path="/methods" element={<Methods/>} />
          </Route>
        </Routes>
      </Router>
  );
};

export default App;
