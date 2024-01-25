import React from "react";
import ReactDOM from "react-dom";
import Cart from "./Cart";
import Header from "./Header"; 
import Content from "./Content";
import {Route,Routes} from 'react-router-dom'

function App() { 
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Content/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
   
     
    </>
  );
}

export default App;
