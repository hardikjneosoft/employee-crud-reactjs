import { useState } from "react";
import { Navbar } from "../components/Navbar";
import "./Header.css"
import { Login, Logout, SearchRounded } from '@mui/icons-material' 
import Logo from './Logo'

 function Header(){
    const [loggedIn, setLoggedIn] = useState(false)

    return(
    <header className="p-2 text-xl text-white bg-gradient-to-r from-[rgb(30,144,255)] via-red-500  to-[rgb(243,12,12)] text-center font-sans flex flex-grow items-center shadow-md shadow-slate-500 mb-2">
        <Logo />
        <Navbar />
        <form role="search" className=" flex  rounded-xl mr-10 focus-within:border-2 focus-within:border-black ">
            <button className="bg-white ml-0  rounded-s-xl text-black h-8"><SearchRounded  className="m-2"/></button>
            <input type="search" placeholder="Search" aria-label="Search" className="p-1 rounded-e-lg text-black outline-none w-[300px] h-8 " />
        </form>
        <button className=" p-1">{loggedIn?<Logout />:<Login />}</button>
    </header>
    );
}

export default Header