
import React, { useState, useEffect } from 'react';
import './User.css'; 

const User = () => {
    const [user, setUser] = useState(null);   
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(data => {
                setUser(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="user-container">
            {loading ? (
                
                <div className="spinner-container">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <span className="loading-text">Loading user data...</span>
                </div>
            ) : user ? (
                
                <div className="user-card">
                    <h2 className="user-name"><strong>Name:</strong>{user.name}</h2>
                    
                    <p className="user-info"><strong>Email:</strong> {user.email}</p>
                    <p className="user-info"><strong>Phone:</strong> {user.phone}</p>
                    
                    <p className="user-info"><strong>Website:</strong> {user.website}</p>
                </div>
            ) : (
                <p className="error-text">User not found.</p>
            )}
        </div>
    );
};

export default User;
