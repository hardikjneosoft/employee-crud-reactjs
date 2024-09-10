
import './App.css';

import  Header  from '../header/Header';
import Login from '../components/Login';
import Footer from '../footer/Footer';
import { Learning } from '../components/Learning';
import { EmployeeCard } from '../components/EmployeeCard';
import { Employees } from '../components/Employee';
/* <React.Fragment> </React.Fragment> */
function App() {
  // development : JS
  return (
    // template : JSX
    <>  
      <div className="min-h-screen ">
        <Header></Header>
        {/* <Login className=""/> */}
        <Learning />
        {/* <EmployeeCard /> */}
        {/* <Employees /> */}
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
