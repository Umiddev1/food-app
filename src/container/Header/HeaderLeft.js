import React from "react";
import Logo from '../../assets/img/Logo.png';
import { Link, NavLink } from "react-router-dom";
import Home from "../../pages/Home";
import Discount from "../../pages/Discount";
import Dashboard from "../../pages/Dashboard";
import Message from "../../pages/Message";
import Belle from "../../pages/Belle";
import Setting from "../../pages/Settings";
import Exit from "../../pages/Exit";
import { Routes, Route } from "react-router-dom";
import './Header.css';
function HeaderLeft() {
  return (
       <div className="food__gr">
      <ul className="food__list p-0"> 
        <li className="nav__item"><Link to='/'><img className="nav__img" src={Logo} alt="logo" /></Link></li>
        <li className="nav__item"><NavLink className="nav__link"  activeclassname="actives" to='/'><i className="far fa-home-alt"></i></NavLink></li>
        <li className="nav__item"><NavLink className="nav__link"  activeclassname="actives" to='/discount'><i className="fal fa-badge-percent"></i></NavLink></li>
        <li className="nav__item"><NavLink className="nav__link"  activeclassname="actives" to='/dashboard'><i className="fal fa-chart-pie-alt"></i></NavLink></li>
        <li className="nav__item"><NavLink className="nav__link"  activeclassname="actives" to='/message'><i className="fal fa-envelope"></i></NavLink></li>
        <li className="nav__item"><NavLink className="nav__link"  activeclassname="actives" to='/belle'><i className="fal fa-bell"></i></NavLink></li>
        <li className="nav__item"><NavLink className="nav__link"  activeclassname="actives" to='/setting'><i className="fal fa-cog"></i></NavLink></li>
        <li className="nav__item"><NavLink className="nav__link"  activeclassname="actives" to='/exit'><i className="far fa-sign-out"></i></NavLink></li>
      </ul>
      <div className="gr" >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discount" element={<Discount />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/message" element={<Message />} />
        <Route path="/belle" element={<Belle />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/exit" element={<Exit />} />
      </Routes>
      </div>
    </div>
   
  )
}
export default HeaderLeft