import { useState } from 'react';
import './EmployeeForm.css'
import Employee from './EmployeeClass';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { addEmployee } from '../model/EmployeeCRUD';

function EmployeeForm(){
    const [employee, setEmployee] = useState(new Employee())
    const handleChange = function(evt){
        setEmployee({ ...employee, [evt.target.id]: evt.target.value })
    }
    const handleFile= function(evt){
        const file = evt.target.files[0]
        setEmployee({...employee,[evt.target.id]:file})
    }
    const params = useParams()
    
    function collectData(e){
        e.preventDefault();
        addEmployee(employee)
    }
    return (
    <>
        <div className="flex flex-col items-center">
            <form className="shadow-xl shadow-slate-300 flex flex-col employee-form border-4-blue p-10 mt-20 text-lg border-blue-300 border-[6px] rounded-lg w-fit" onSubmit={collectData}>
                <label htmlFor="empId" >Employee ID</label>
                {params.id?<input readOnly value={params.id}/>:<input onChange={handleChange} id='empId' value={employee.empId} type="number"  placeholder="Enter emp id"/>}
                <label htmlFor="empName">Name</label>
                <input onChange={handleChange} id='empName' value={employee.empName} type="text" placeholder="Enter your first name"/>

                {/* <label htmlFor="">Last name</label>
                <input onChange={handleChange} id='' value={employee.} type="text" placeholder="Enter your last name"/>
                 */}
                <label htmlFor="experience">Experience</label>
                <input onChange={handleChange} id='experience' value={employee.experience} type="text" placeholder="Enter your experience"/>

                <label htmlFor="deptCode">Department</label>
                <select onChange={handleChange} id='deptCode' value={employee.deptCode}><option>SD</option><option>LD</option></select>

                <label htmlFor="empEmail">Email ID</label>
                <input onChange={handleChange} id='empEmail' value={employee.empEmail} type="email" placeholder="Enter your department"/>

                <label htmlFor="basicSalary">Basic Salary:</label>
                <input onChange={handleChange} id='basicSalary' value={employee.basicSalary} type="number" placeholder="Enter your department"/>

                <label htmlFor="joiningDate">Joining Date:</label>
                <input onChange={handleChange} id='joiningDate' value={employee.joiningDate} type="date" placeholder="Enter your department"/>

                <label htmlFor="secretCode">secret code</label>
                <input onChange={handleChange} id='secretCode' value={employee.secretCode} type="password" placeholder="Enter your department"/>

                <label htmlFor="confirmCode">Confirm Code</label>
                <input onChange={handleChange} id='confirmCode' value={employee.confirmCode} type="number" placeholder="Enter your department"/>

                <label htmlFor='pfp'>Profile Picture</label>
                <input onChange={handleFile} id='pfp'  type='file' />

                <div className='m-2 inline'><Button className='w-fit m-4' variant="contained" color="primary" onClick={() => alert("Button Clicked!")} type='submit'>Submit</Button></div>
                <div className='m-2 inline'><Button className='w-fit m-4' variant="contained" color="primary" onClick={() => alert("Button Clicked!")}>Reset</Button></div>
            </form>
        </div>
    </>

    )
}

export default EmployeeForm;