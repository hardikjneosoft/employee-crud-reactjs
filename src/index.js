import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,redirect,RouterProvider } from 'react-router-dom'; 
import { Learning } from './components/Learning';
import EmployeeForm from './components/EmployeeForm';
import { EmployeeCard } from './components/EmployeeCard';
import AdminLogin from './components/AdminLogin';
import {getAllEmployee} from '../src/model/EmployeeCRUD.js'
import { Employees } from './components/Employee';
const root = ReactDOM.createRoot(document.getElementById('root'));

const childRoutes = [
  {
    path:'/',
    loader:()=>redirect('home')
  },
  {
    path:'/home',
    element: <Learning />
  },
  {
    path:'employee/form',
    element:<EmployeeForm />
  },
  {
    path:'employee/edit/:id',
    element: <EmployeeForm />
  },
  {
    path:'employees',
    element:<Employees />,
    loader: ()=> getAllEmployee()
  },
  {
    path:'login/admin',
    element:<AdminLogin />
  }
]

const routes = [
  {
    path:'/',
    element:<App />,
    children:childRoutes
  }
]
const myrouter = createBrowserRouter(routes)

root.render(
  <React.StrictMode>
    <RouterProvider router={myrouter}></RouterProvider>

  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
