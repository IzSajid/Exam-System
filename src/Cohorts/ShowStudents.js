import React, { useEffect, useState } from 'react';

const ShowStudents = () => {
    const[students,setStudents]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/students')
        .then(res=>res.json())
        .then(data=>setStudents(data))
    },[])
    return (
        <div>
            <h1>People in the class {students.length}</h1>
            {
                students.map(student=><li>{student.email}</li>)
            }
            
        </div>
    );
};

export default ShowStudents;