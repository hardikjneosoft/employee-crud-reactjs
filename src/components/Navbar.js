import { useState } from 'react';
import './Navbar.css';

export function Navbar() {
  const navItems = ['Home','About','Contact']
  return (
    <>
      <nav className="mr-60 ml-20"><ul className="flex">
        {navItems.map((item,index)=>{return(<li className="mx-6">{item}</li>)})}
      </ul></nav>
    </>
  );
}
