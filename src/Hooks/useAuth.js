import { useEffect, useState } from "react"
import API from "../Axios/axios";

const useAuth = ()=>{
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    // useEffect(()=>{
    //     console.log(loading);
    // },[loading])

    const clearError = ()=>{
        setError(null)
    }

    const login = async (payload)=>{
        console.log("login");
        setError(null)
        setLoading(true);
        try{
            if(payload.pinLogin)
            {
                if(!payload.pin){
                    throw Error("PIN Cannot be Empty");
                }
            }
            else{
                if(!payload.email || !payload.pass){
                    throw Error("Fields Cannot be Empty");
                }
            }
            const user = await API.post("user/login/",payload)
            setLoading(false)
            return user
        }catch(error)
        {
            if (error.response) {
                // Error response with custom message
                console.log(error.response.data.message); // Access the error message
                console.log(error.response.status); // Access the HTTP status code
                setError({message:error.response.data.message})
              } else {
                // Network error
                console.log(error.message); // Access the network error message
                setError({message:error.message})
              }
            setLoading(false)
        }
    }
    
    const signin = async ({email,pass,pin})=>{
        console.log("signin");
        setError(null)
        setLoading(true);
        try{
            const user = await API.post("user/signup/",{email,pass,pin})
            setLoading(false)
            return user
        }catch(error)
        {
            if (error.response) {
                // Error response with custom message
                console.log(error.response.data.message); // Access the error message
                console.log(error.response.status); // Access the HTTP status code
                setError({message:error.response.data.message})
              } else {
                // Network error
                console.log(error.message); // Access the network error message
                setError({message:error.message})
              }
            setLoading(false)
        }
    }
    
    return {loading,error,login,signin,clearError}
}

export default useAuth;