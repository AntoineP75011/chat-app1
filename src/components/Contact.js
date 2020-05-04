import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className = "Contact">
            <img
                className = "avatar"
                src = "https://randomuser.me/api/portraits/men/19.jpg"
                alt = "Célestin Paillasson"
            />
            <div>
                <p className="name">Célestin Paillasson</p>
                <div className="status">
                    <div className="status-online" />
                    <p className="status-text">online</p>
                </div>
            </div>
        </div>
    );
}

export default Contact