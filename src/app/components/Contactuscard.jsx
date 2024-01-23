import React from 'react';

import './contactuscard.css';

const Contactuscard = ({ img, by, details }) => {
    return (
        <div className="contactcard">
            <img src={img} alt="" />
            <h1>{by}</h1>
            <p>{details}</p>
        </div>
    );
};

export default Contactuscard;
