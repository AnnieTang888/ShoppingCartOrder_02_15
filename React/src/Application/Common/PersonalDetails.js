// PersonalDetails.js
import React from 'react';

const PersonalDetails = ({ name, age, location, hobbies, additionalDetail }) => {
    return (
        <div>
            <h2>{name}'s Details</h2>
            <p>Age: {age}</p>
            <p>Location: {location}</p>
            <p>Hobbies: {hobbies}</p>
            <p>Additional Detail: {additionalDetail}</p>
        </div>
    );
};

export default PersonalDetails;
