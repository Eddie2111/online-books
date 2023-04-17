import {useEffect}  from 'react';
import axios from 'axios';
export default function Logout(){
    useEffect(()=>{
        axios.post("http://localhost:2000/logout",
            {
                email:localStorage.getItem("useremail"),
                role:localStorage.getItem("usertype")
            }, 
            {withCredentials: true})
        .then(res=> {
            localStorage.removeItem("authtoken")
            localStorage.removeItem("useremail")
            localStorage.removeItem("usertype")
            window.location.href = "/login"
        })
        .catch(err => alert(err))
    },[])

    return(
        <div>
            Loading
        </div>
    )
}