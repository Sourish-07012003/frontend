import React from "react";
const Hero = ({title,imageUrl}) => {
    return (
        <>
        <div className='hero container'>
            <div className="banner">
                <h1>{title}</h1>
                <p>
                    
MedControl360 is a comprehensive medical website designed to provide users with a centralized platform for managing and controlling their healthcare needs effectively. With a user-friendly interface and a range of features, MedControl360 aims to empower individuals to take charge of their health and wellness journey.
                </p>
                </div>
                <div className="banner">
                    <img src={imageUrl} alt="hero" className="animated-image" />
                    <span>
            <img src="/Vector.png" alt="vector" />
            </span>
                </div>
        
        
        </div>
        </>
        
    );
};


export default Hero;