
import './App.css';

import  Header  from '../header/Header';
import EmployeeForm from '../components/EmployeeForm';
import Footer from '../footer/Footer';
import { Learning } from '../components/Learning';
import { EmployeeCard } from '../components/EmployeeCard';
import { Employees } from '../components/Employee';
import AdminLogin from '../components/AdminLogin';
/* <React.Fragment> </React.Fragment> */
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
export const AppContext = React.createContext()

function App() {
  // development : JS

  const [companyName,setcompanyName] = useState("NEOSOFT")
  return (
    // template : JSX
    <AppContext.Provider value={companyName}>  
      <div className="min-h-screen ">
        <Header></Header>
        <Outlet />
        <Footer></Footer>
      </div>
    </AppContext.Provider>
  );
}

export default App;
