import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './index.css';
import './css/menu.css';
import {ButtonMenu} from "./components/ButtonMenu.js";
import {SideMenu} from "./components/SideMenu.js";
import {Body} from "./components/Body.js";





const Wrap = () =>{
return (
  <div>
    <SideMenu/>
    <ButtonMenu/>
    <Body/>
  </div>
)
}

ReactDOM.render(<Wrap/>,document.getElementById('root'))
