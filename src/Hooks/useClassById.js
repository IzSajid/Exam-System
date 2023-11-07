import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const useClassById=()=>{
    const {id}=useParams();
    const [user,setUser]=useState([]);
    // console.log(user)
  
    useEffect(()=>{
        const url=`http://localhost:3000/classes/${id}`
        console.log(url);
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
           setUser(data)

        })
      
        .catch((error) => {
            console.error("Error fetching data:", error);
            // Handle the error by setting user to null or an error state
          });
    },[id])
    // console.log(user.name)
   
    return [user];
    

}
export default useClassById;