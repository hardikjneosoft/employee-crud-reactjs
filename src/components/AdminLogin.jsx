import { Button } from "@mui/material"
import { useContext, useRef } from "react"
import { AppContext } from "../app/App"

export default function AdminLogin(){
    let usernameNode = useRef()
    let passwordNode = useRef()
    function collectData() {
        const username = usernameNode.current
        const password = passwordNode.current
        console.log(username)
        console.log(password)
    }
    return(
    
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-semibold mb-6 text-center">{`Admin Login ${useContext(AppContext)}`}</h1>
          <form onSubmit={collectData}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input id="username" type="text" ref={usernameNode} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input id="password" type="password" ref={passwordNode} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          
          <div className="flex justify-between gap-1">
            <Button className="w-full mx-2" variant="contained" color="secondary" onClick={() => alert("Button Clicked!")} >Submit</Button>
            <Button className="w-full mx-2" variant="contained" color="primary" onClick={() => alert("Button Clicked!")}>Reset</Button>
          </div>
          </form>
        </div>
      </div>
    );}