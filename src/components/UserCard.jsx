import {useState, useEffect} from 'react';
const UserCard = (user) => {
    return (
        <div>
            <p><strong>ID:</strong>{user.id}</p>
            <p><strong>Email:</strong>{user.email}</p>
            <p><strong>phone:</strong>{user.phone}</p>
            <p><strong>Website:</strong>{user.website}</p>
            <p><strong>Rating:</strong>{user.rating}</p>
            <p><strong>verified:</strong>{user.verified ? "yes" : "no"}</p>
            if( user.verified === true <p style={{color: 'red'}}>verified</p>
            if (user.verified >= 4  <p style={{color: 'golden'}}>Ratting</p>
        </div>
    );
}
export default UserCard;