import { useLoaderData } from "react-router-dom"
import { EmployeeCard } from "./EmployeeCard"
import Employee from './EmployeeClass.js'
export function Employees(){
//   const employees = [
//     new Employee(
//         "E12345",
//         "John Doe",
//         new Date("2024-01-15"),
//         parseFloat("50000"),
//         "D001",
//         parseInt("5"),
//         'images/dummy-profile.png',
//         "XYZ123",
//         "XYZ123"
//     ),
//     new Employee(
//         "E67890",
//         "Jane Smith",
//         new Date("2023-11-20"),
//         parseFloat("60000"),
//         "D002",
//         parseInt("8"),
//         'images/dummy-profile.png',
//         "ABC456",
//         "ABC456"
//     ),
//     new Employee(
//         "E11223",
//         "Alice Johnson",
//         new Date("2022-05-10"),
//         parseFloat("55000"),
//         "D003",
//         parseInt("3"),
//         'images/dummy-profile.png',
//         "LMN789",
//         "LMN789"
//     ),
//     new Employee(
//         "E44556",
//         "Bob Brown",
//         new Date("2021-09-30"),
//         parseFloat("65000"),
//         "D004",
//         parseInt("10"),
//         'images/dummy-profile.png',
//         "OPQ012",
//         "OPQ012"
//     )
// ];
        const employees = useLoaderData()
        function toEmployeeObject(employee) {

            const empObj = new Employee(
           employee._id,
             employee.emp_name,
                 employee.joining_date, 
                 employee.emp_salary,
              employee.dept_code,
                employee.experience,
              employee.emp_email,
         employee.employee_pic, 
                employee.secret_code,
                //  employee.confirm_code, 
            );
            return empObj;
        }
        

          return(<div className="flex flex-wrap">
        {
            employees.map((item,index)=>{
                console.log(item)
                item = toEmployeeObject(item)
                return(<EmployeeCard key={index} emp={item}/>)
            })

        }
    </div>)
}