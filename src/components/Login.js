import './Login.css'

function Login(){
    return (
    <>
        <div className="flex flex-col items-center">
            <form className="shadow-xl shadow-slate-300 flex flex-col employee-form border-4-blue p-10 mt-20 text-sm border-blue-300 border-[6px] rounded-lg">
                <lablel>First name</lablel>
                <input type="text" placeholder="Enter your first name"/>
                <lablel>Last name</lablel>
                <input type="text" placeholder="Enter your last name"/>
                <lablel>Experience</lablel>
                <input type="text" placeholder="Enter your experience"/>
                <lablel>Department</lablel>
                <input type="text" placeholder="Enter your department"/>
            </form>
        </div>
    </>
    )
}

export default Login;