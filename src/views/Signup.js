import { useState } from "react";
import {Button} from '@chakra-ui/react'
import axios from 'axios'
export default function Signup(){
    const [error, setError] = useState("");
    const onSubmitHandle = async(e)=>{
        e.preventDefault();
        const data = {            
            Name: e.target.name.value,
            Password:  e.target.password.value,
            Email: e.target.email.value,
            Hostel_Name: e.target.hostelName.value,
            Room_No : e.target.room_no.value,
            Phone_No : e.target.phoneNumber.value,
        }
        if(e.target.cpassword.value !== e.target.password.value){
            setError("Passwords do not match");
        }
        console.log(data)
        
        await axios.post("http://localhost:2000/register", data)
        .then(res=>
            {
                if(res.data === "Registered"){
                    alert("Registered Successfully");
                    window.location.href = "/login";
                }
            }
            )
        .catch(err => console.log(err))
        
    }

    return(
        <div>
            <form onSubmit={onSubmitHandle} className="mx-auto flex flex-col w-4/5 shadow-lg border-grey-400 p-5 mt-[5rem] mb-[10rem] hover:shadow-xl duration-300">
                <label className="my-2 text-black">Name</label>
                <input className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" type="text" placeholder="name" name="name" required/>
                <label className="my-2 text-black">Phone Number</label>
                <input className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" type="text" placeholder="name" name="phoneNumber" required/>
                <label className="my-2 text-black">Hostel Name</label>
                <input className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" type="text" placeholder="name" name="hostelName" required/>
                <label className="my-2 text-black">Room Number</label>
                <input className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" type="text" placeholder="name" name="room_no" required/>
                <label className="my-2 text-black">Email</label>
                <input className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" type="text" placeholder="email" name="email" required/>
                <label className="my-2 text-black">Password</label>
                <input className="mb-5 border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" type="password" placeholder="password" name="password" required/>
                <label className="my-2 text-black">Confirm Password</label>
                <input className="mb-5 border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" type="password" placeholder="password" name="cpassword" required/>
                <p className="text-red-500">&nbsp;{error}&nbsp;</p>
                <Button colorScheme="blue" type="submit">Login</Button>
            </form>

        </div>
    )
}