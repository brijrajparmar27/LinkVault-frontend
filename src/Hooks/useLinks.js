import { useState } from "react"
import API from "../Axios/axios";

const useLinks = ()=>{

    const saveLinks = async (newLinks)=>{
      const {data} = await API.post("/links", { data: JSON.stringify(newLinks) })
      return data      
    }

    const getLinks = async ()=>{
        console.log("fetching data");
        // API.get("/links").then(({data})=>{
        //     console.log(data);
        //     return data;
        // }).catch(err=>{
        //     throw Error({error:err.message})
        // })
        const {data} = await API.get("/links")
        return data
    }

    return {saveLinks,getLinks}
}
export default useLinks