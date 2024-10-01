import { useState } from 'react';
import './card.css'

const Card = ({ data }) => {
    return (
        <div className="card latestNewsCard">
            <img src={data.backgroundImage} className="card-img-top" alt="Restaurant-Latest-News" />
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text opacity-75">{data.paragraph}</p>
                <hr />
                <div className="date-blog opacity-75">
                    <p>{data.date}</p>
                    <a href="###" className="opacity-75">Read More</a>
                </div>
            </div>
        </div>
    );
};
 
export default Card;