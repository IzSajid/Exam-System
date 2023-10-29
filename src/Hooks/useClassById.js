import { useEffect, useState } from "react"

const useClassById=(userId)=>{
    const [user,setUser]=useState([]);
    useEffect(()=>{
        const url=`http://localhost:3000/user/${userId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[userId])
    return [user];

}
export default useClassById;