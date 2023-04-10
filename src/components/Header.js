import React, { useEffect, useState } from "react";

import { IMG_CDN_URL } from "./Config";

import foodvilla from '../assets/img/foodvilla.jpeg'

import {Link} from 'react-router-dom'


const Title = () => {
  return (
    <>
      <a href="/">
        <img alt="logo" src={IMG_CDN_URL}  height="80" />
      </a>
    </>
  );
};

export const Header = () => {
  const [isloggedin, setisloggedin] = useState(true);

  useEffect(() => {
     //console.log("useEffect Render");
  },[isloggedin]);

   //console.log("render component");

  return (
    <>
      <div>
        <div className="Header1">
          {Title()}
          <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
          {isloggedin ? (
            <button onClick={() => setisloggedin(false)}>login</button>
          ) : (
            <button onClick={() => setisloggedin(true)}>logout</button>
          )}
        </div>
      </div>
    </>
  );
};
