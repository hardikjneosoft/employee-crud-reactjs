import { transform } from 'typescript';
import Logo from '../header/Logo.jsx'
export function EmployeeCard({empName="Hardik Jain",deptCode="Software Development",empId='12761',address="The Ruby Tower, Senapati Bapat Marg, Dadar West, Mumbai, Maharashtra 400028"}) {
    const shadow_style = {boxShadow: "0px 10px 20px 5px rgba(0, 0, 0, 0.15)"  };
    return(
        <div>
            <div className="relative m-10 w-[400px] h-[600px] flex flex-col items-center bg-[rgba(245,248,255,0.7)]  border-white border-2 rounded-2xl hover:[rotateY(60deg)]" style={shadow_style}>
                <div className='mt-6 mb-4'><Logo neo='' soft='#d93117' tm=''/></div>
                <div><img width="170" src="./employee_profile.jpg" className="border-[3px] border-black rounded-lg"/></div>
                <span className="mt-1 font-bold text-red-500">{empName}</span>
                <span className="font-semibold">{deptCode}</span>
                <span>{empId}</span>
                <span>O+ve</span>
                <div className="h-[130px] w-[400px] bg-red-500 text-white p-6 px-8 text-[16px]">{address}</div>
                <span className='absolute bottom-2 font-mono tracking-[3px] text-xs mt-2'>www.neosofttech.com</span>
            </div>


        </div>
    )
}