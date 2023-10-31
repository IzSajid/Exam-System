import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import './ShowStudents.css'
import { useParams } from 'react-router-dom';
import useClassById from '../Hooks/useClassById';


const Dashboard = () => {
   const [classes,setClasses]=useState([]);
   const {id}=useParams();
  const user=useClassById(id);
     console.log(id)
//    const {id}=useParams();
//    useEffect(()=>{
//     const url= `http://localhost:5000/classes/${id}`
//     console.log(url);
//     fetch(url)
//     .then(res=>res.json())
//     .then(data=>setClasses(data))
//    },[])


    return (
      <div>
        <Menu></Menu>
      </div>
    );
};

export default Dashboard;