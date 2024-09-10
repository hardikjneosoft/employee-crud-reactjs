
export default class Employee {
    constructor(
         empId=0,
         empName="",
         joiningDate = new Date(),
         basicSalary=0,
         deptCode="",
         experience=0,
         pfp='images/dummy-profile.png',
         secretCode='123',
         confirmCode='123'
    ){
        this.empId = empId
        this.empName = empName
        this.joiningDate = joiningDate
        this.basicSalary = basicSalary
        this.deptCode = deptCode
        this.experience = experience
        this.pfp = pfp
        this.secretCode=secretCode
        this.confirmCode=confirmCode
    }
}
