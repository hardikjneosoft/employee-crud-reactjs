import { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export function Navbar() {
  const navItems = [
    {text:'Home',link:'/'},
    {text:'Add employee',link:'employee/form'},
    {text:'Show employee',link:'employees'},
    {text:'Admin',link:'login/admin'},
  ]
  return (
    <>
      <nav className="mr-60 ml-20"><ul className="flex">
        {navItems.map((item,index)=>{return(<li className="mx-6"><Link to={item.link}>{item.text}</Link></li>)})}
      </ul></nav>
    </>
  );
}
