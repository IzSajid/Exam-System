import React from 'react';
import './Feature.css';

const Feature = ({ feature }) => {
    const { _id, name, image, description } = feature;

    // const cardStyle = {
    //     backgroundImage: `url(${image})`, // Set background image using template string
    // };

    return (
        <div>
            <div className="card-container  card w-96 chat-image mt-2 mb-5 " style={{backgroundImage:'../../Pictures/backgroundimg.jpg'}}>
                <div className="card-body shadow-xl  rounded border-white">
                    <h2 className="card-title">{name}!</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;