import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";
import axios from "axios"
import {toast} from "react-toastify"

const Login = () => {
const [state, setState] = useState("Admin")
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const {setAToken,backendUrl} = useContext(AdminContext)

const onSubmitHandler = async (event) => {
    event.preventDefault()

    try{
        if (state === "Admin") {
            const {data} = await axios.post(backendUrl + '/api/admin/Login', {email, password })

            if (data.success) {
                localStorage.setItem('aToken', data.token)
                setAToken(data.token);
            } else {
                toast.error(data.message)
            }
  
        } else {

        }

    } catch (error) {

    }

}


return (
<form onSubmit ={onSubmitHandler} 
className = "min-h-[80vh] flex items-center">
    <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-4xl text-[#5E5E5E] text-sm shadow-lg ">
        <p className="text-2xl font-bold m-auto"> <span className="text-green-900"> {state} </span> Login </p>

        <div className="w-full">
            <p className="font-semibold">Email</p>
            <input onChange= {(e) => setEmail(e.target.value)} value = {email} 

            className="border border-[#DADADA] rounded w-full p-2 mt-1 font-semibold" type = "email" placeholder="Enter Email"required />
        </div>

        <div className="w-full">
            <p className="font-semibold">Password</p>
            <input onChange= {(e) => setPassword(e.target.value)} value = {password}  
            
            className="border border-[#DADADA] rounded w-full p-2 mt-1 font-semibold" type = "password" placeholder="Enter password"required />
        </div>
        <button className="bg-green-900 text-white w-full py-2 rounded-md text-base hover:font-semibold">Login</button>

        {
            state === "Admin" ? 
            <p className="text-black font-semibold">Doctor Login ? <span className="text-indigo-600 underline cursor-pointer font-semibold" onClick={() => setState('Doctor')}>Click here</span></p>
            :<p className="text-black font-semibold">Admin Login ? <span className="text-indigo-600 underline cursor-pointer font-semibold" onClick={() => setState('Admin')}>Click here</span></p>
        }

    </div>

</form>
)
};

export default Login;
