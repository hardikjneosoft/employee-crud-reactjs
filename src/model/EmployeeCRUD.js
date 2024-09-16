import axios from 'axios'

const url = "http://localhost:5000/"

export async function addEmployee(employee) {
    const formData = new FormData();
        formData.append("_id", employee.empId);
        formData.append("emp_name", employee.empName);
        formData.append("joining_date", employee.joiningDate); // Convert to string format
        formData.append("emp_salary", employee.basicSalary);
        formData.append("dept_code", employee.deptCode);
        formData.append("experience", employee.experience);
        formData.append("emp_email", employee.empEmail);
        formData.append("employee_pic", employee.pfp); // Assuming employee.will be a file or string link
        formData.append("secret_code", employee.secretCode);
        // formData.append("confirm_code", employee.confirmCode);
    const response = await axios.post(url+'employees/add',formData)
    console.log(response)
}

export async function updateEmployee(employee) {
    
}
export async function deleteEmployee(empId) {
    const response = await axios.delete(url+'employees/delete/'+empId)
    console.log(response)
}
export async function getEmployeeById(empId) {
    const response = await axios.get(url+'employees/get/'+empId)
    console.log(response)
}
export async function getAllEmployee() {
    const response = await axios.get(url+'employees/getall')
    console.log(response.data)
    return response.data
}
