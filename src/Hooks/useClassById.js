import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const useClassById=()=>{
    const {id}=useParams();
    const [users,setUsers]=useState([]);
//    console.log({users.name});
  
    useEffect(()=>{
        const url=`http://localhost:5000/classes/${id}`
        console.log(url);
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
           setUsers(data)

        })
      
        .catch((error) => {
            console.error("Error fetching data:", error);
            // Handle the error by setting user to null or an error state
          });
    },[id])
    // console.log(user.name)
   
    return [users];
    

}
export default useClassById;