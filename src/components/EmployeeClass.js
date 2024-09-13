
export default class Employee {
    constructor(
         empId=0,
         empName="Hardik Jain",
         joiningDate = new Date(),
         basicSalary=10000,
         deptCode="SD",
         experience=10,
         empEmail = 'hardik@neosoftmail.com',
         pfp='',
         secretCode='123',
         confirmCode='123'
    ){
        this.empId = empId
        this.empName = empName
        this.joiningDate = joiningDate
        this.basicSalary = basicSalary
        this.deptCode = deptCode
        this.empEmail = empEmail
        this.experience = experience
        this.pfp = pfp
        this.secretCode=secretCode
        this.confirmCode=confirmCode
    }
}
