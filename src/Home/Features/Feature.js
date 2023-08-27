import React from 'react';

const Feature = ({feature}) => {
    const {_id,name,image,description}=feature;
    return (
        <div>
             <div className=" feature card w-96  shadow-xl chat-image">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}!</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Feature;