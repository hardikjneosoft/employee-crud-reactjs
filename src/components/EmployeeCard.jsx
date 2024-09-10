import { transform } from 'typescript';
import Logo from '../header/Logo.jsx'
import './EmployeeCard.css'
import { useState } from 'react';
import { Button } from '@mui/material';

export function EmployeeCard({emp,address="The Ruby Tower, Senapati Bapat Marg, Dadar West, Mumbai, Maharashtra 400028", }) {
    const shadow_style = {boxShadow: "0px 10px 20px 5px rgba(0, 0, 0, 0.15)"  };
    const [rotate,setRotate] = useState(false)
    return(<>
        <div className={`flip-card hover:cursor-pointer w-[410px] h-[608px] m-10 ${rotate?'rotate':''}`} onMouseEnter={()=>{setRotate(true);}} onMouseLeave={()=>{setTimeout(() => {setRotate(false)}, 0);}}>
            <div className='flip-card-inner'>    
                <div className="flip-card-front absolute w-[400px] h-[600px] flex flex-col items-center bg-[rgba(245,248,255,0.7)]  border-white border-2 rounded-2xl" style={shadow_style}>
                    <div className='mt-6 mb-4'><Logo neo='' soft='#d93117' tm=''/></div>
                    <div><img width="170" src="./employee_profile.jpg" className="border-[3px] border-black rounded-lg"/></div>
                    <span className="mt-1 font-bold text-red-500">{emp.empName}</span>
                    <span className="font-semibold">{emp.deptCode}</span>
                    <span>{emp.empId}</span>
                    <span>O+ve</span>
                    <div className="h-[130px] w-[400px] bg-red-500 text-white p-6 px-8 text-[16px]">{address}</div>
                    <span className='absolute bottom-2 font-mono tracking-[3px] text-xs mt-2'>www.neosofttech.com</span>
                </div>


                <div className="flip-card-back absolute w-[400px] h-[600px] bg-[rgba(245,248,255,0.7)] border-white border-2 rounded-2xl" style={shadow_style}>
                    <div className="flex flex-col items-center p-6">
                        <div className="mb-4"><Logo neo='' soft='#d93117' tm=''/></div>
                        <div className="text-center">
                            <div className="font-bold text-red-500 mb-2">{emp.empName}</div>
                            <div className="font-semibold mb-1">{emp.deptCode}</div>
                            <div className="mb-1">Employee ID: {emp.empId}</div>
                            <div className="mb-1">Basic Salary: {emp.basicSalary}</div>
                            <div className="mb-1">Joining Date: {emp.joiningDate.toString()}</div>
                            <div className="mb-1">Experience: {emp.experience} years</div>
                            <div className="mb-1">Email: {emp.email}</div>
                        </div>
                        <span className='absolute bottom-2 font-mono tracking-[3px] text-xs mt-2'>www.neosofttech.com</span>
                    </div>
                </div>
            </div>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
        </div>

                    </> )
}