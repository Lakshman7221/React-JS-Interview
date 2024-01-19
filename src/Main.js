import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./index.css"
const Main = () => {
  const navLinkStyle = ({isActive})=>{
    return{
     fontWeight: isActive ? "bold" : "normal",
     textDecoration: isActive ? "none" : "none"	,
     color:isActive ? "black" : "black"
      }
    }
  return (
    <div className='d-flex' >
        <div className='bg-light p-4 overflowX' style={{width:"350px"}}>
        <NavLink to="/bind" style={navLinkStyle}>Bind</NavLink> <br/>
        <NavLink to="/call" style={navLinkStyle}>Call</NavLink> <br/>
        <NavLink to="/apply" style={navLinkStyle}>Apply</NavLink> <br/>
        <NavLink to="/prototype" style={navLinkStyle}>Prototype</NavLink> <br/>
        <NavLink to="/hoisting" style={navLinkStyle}>Hoisting</NavLink> <br/>
        <NavLink to="/closure" style={navLinkStyle}>Closure</NavLink> <br/>
        <NavLink to="/shallow-deep" style={navLinkStyle}>Shallow_DeepCopy</NavLink> <br/>
        <NavLink to="/interceptor" style={navLinkStyle}>Interceptor</NavLink> <br/>
        <NavLink to="/hof" style={navLinkStyle}>HOF</NavLink> <br/>
        <NavLink to="/call-back" style={navLinkStyle}>Call-Back</NavLink> <br/>
        <NavLink to="/promises" style={navLinkStyle}>Promises</NavLink> <br/>
        <NavLink to="/async-wait" style={navLinkStyle}>Async & Wait</NavLink> <br/>
        <NavLink to="/asyncrouns_synchrouns" style={navLinkStyle}>Asyncrouns_Synchrouns</NavLink> <br/>
        <NavLink to="/data-types" style={navLinkStyle}>Data Types</NavLink> <br/>
        <NavLink to="/methods" style={navLinkStyle}>Methods</NavLink> <br/>
        <hr />
        <NavLink to="/javascript" style={navLinkStyle}>JavaScript</NavLink> <br/>
        <NavLink to="/varibles" style={navLinkStyle}>Var-Let-Const</NavLink> <br/>
        <NavLink to="/function" style={navLinkStyle}>Function</NavLink> <br/>
        <NavLink to="/arrow-function" style={navLinkStyle}>Arrow_Function</NavLink> <br/>
        <NavLink to="/array" style={navLinkStyle}>Array</NavLink> <br/>
        <NavLink to="/object" style={navLinkStyle}>Object</NavLink> <br/>
        <hr />
        <NavLink to="/new-features" style={navLinkStyle}>New Features</NavLink> <br/>
        <NavLink to="/spread-operators" style={navLinkStyle}>Spread_Operators</NavLink> <br/>
        <NavLink to="/rest-operators" style={navLinkStyle}>Rest_Operators</NavLink> <br/>
        <NavLink to="/destructuring" style={navLinkStyle}>Destructuring</NavLink> <br/>
        <NavLink to="/ternary-operators" style={navLinkStyle}>Ternary_Operators</NavLink> <br/>
        <NavLink to="/template-literals" style={navLinkStyle}>Template_Literals</NavLink> <br/>
        </div>
        <div className='p-4 vw-100' style={{backgroundColor:"#f0f0f0"}}>
          <Outlet/>
        </div>
    </div>
  )
}

export default Main