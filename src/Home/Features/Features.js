import React, { useEffect, useState } from 'react';
import Feature from './Feature';
import './Features.css';


const Features = () => {
    const [features,setFeatures]=useState([]);

//    feature loads using json 
    useEffect(()=>{
        fetch("Features.json")
        .then((res)=>res.json())
        .then((data)=>setFeatures(data))
    },[])
    return (
        <div id="features" className="container">
            <h1 className='features-title mt-3 mb-5'>Our Features</h1>
            {/* pass objects onto subclass  */}
            <div  className="features-container">
                {features.map(feature=>(<Feature key={feature._id} feature={feature}></Feature>))}
            </div>
           
          
        </div>

    );
};

export default Features;