import { EmployeeCard } from "./EmployeeCard"
export function Employees(){
    const employees = [
        {
          empId: "E12345",
          empName: "John Doe",
          basicSalary: "50000",
          deptCode: "D001",
          joiningDate: "2024-01-15",
          experience: "5",
          email: "john.doe@example.com",
          secretCode: "XYZ123",
          confirmCode: "XYZ123"
        },
        {
          empId: "E67890",
          empName: "Jane Smith",
          basicSalary: "60000",
          deptCode: "D002",
          joiningDate: "2023-11-20",
          experience: "8",
          email: "jane.smith@example.com",
          secretCode: "ABC456",
          confirmCode: "ABC456"
        },
        {
          empId: "E11223",
          empName: "Alice Johnson",
          basicSalary: "55000",
          deptCode: "D003",
          joiningDate: "2022-05-10",
          experience: "3",
          email: "alice.johnson@example.com",
          secretCode: "LMN789",
          confirmCode: "LMN789"
        },
        {
          empId: "E44556",
          empName: "Bob Brown",
          basicSalary: "65000",
          deptCode: "D004",
          joiningDate: "2021-09-30",
          experience: "10",
          email: "bob.brown@example.com",
          secretCode: "OPQ012",
          confirmCode: "OPQ012"
        }
      ];
          return(<div className="flex flex-wrap">
        {
            employees.map((item,index)=>{
                return(<EmployeeCard key={index} {...item}/>)
            })
        }
    </div>)
}