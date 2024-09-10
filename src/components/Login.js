import './Login.css'

function Login(){
    return (
    <>
        <div className="flex flex-col items-center">
            <form className="shadow-xl shadow-slate-300 flex flex-col employee-form border-4-blue p-10 mt-20 text-lg border-blue-300 border-[6px] rounded-lg w-[1000px]">
                <label>Employee ID</label>
                <input type="number" placeholder="Enter emp id"/>>
                <label>First name</label>
                <input type="text" placeholder="Enter your first name"/>
                <label>Last name</label>
                <input type="text" placeholder="Enter your last name"/>
                <label>Experience</label>
                <input type="text" placeholder="Enter your experience"/>
                <label>Department</label>
                <select><option>SD</option><option>LD</option></select>
                <label>Email ID</label>
                <input type="email" placeholder="Enter your department"/>
                <label>Basic Salary:</label>
                <input type="number" placeholder="Enter your department"/>
                <label>Joining Date:</label>
                <input type="date" placeholder="Enter your department"/>
                <label>secret code</label>
                <input type="password" placeholder="Enter your department"/>
                <label>Confirm Code</label>
                <input type="number" placeholder="Enter your department"/>
            </form>
        </div>
    </>
    )
}

export default Login;