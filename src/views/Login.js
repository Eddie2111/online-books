import {Button} from '@chakra-ui/react'
import axios from 'axios'

export default function Login(){
    const onSubmitHandle = async(e)=>{
        e.preventDefault();
        //console.log(e.target.role.value)
        //console.log(e.target.email.value)
        //console.log( typeof(e.target.password.value))
        const data = {        
            role: e.target.role.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        await axios.post("http://localhost:2000/login", data, {withCredentials:true})
        .then(res=> {
            console.log(res)
            localStorage.setItem("authtoken", res.data.usertype)
            localStorage.setItem("useremail", res.data.email)
            localStorage.setItem("usertype", res.data.usertype)
            if(res?.data?.usertype){
                window.location.href = "/home";
            }
        }) 
        .catch(err => alert(err))
    }
    return(
        <div className="container mx-auto my-auto px-auto py-auto">
            <form onSubmit={onSubmitHandle} className="mx-auto flex flex-col w-4/5 shadow-lg border-grey-400 p-5 mt-[10rem] hover:shadow-xl duration-300">
                <label className="my-2 text-black">Role</label>
                <select 
                className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue " 
                name="role" id="role">
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
                <label className="my-2 text-black">Email</label>
                <input className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" 
                type="text" placeholder="email" name="email" required/>
                <label className="my-2 text-black">Password</label>
                <input className="mb-5 border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" 
                type="password" placeholder="password" name="password" required/>
                <Button colorScheme="blue" type="submit">Login</Button>
            </form>
        </div>
    )
}