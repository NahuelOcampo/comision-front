import React from 'react';

const Card = (props) => {
    return (
            <div className="card">
                <div className="card-body">
                    <img src={props.img} className="card-img-bottom" alt={props.name} />
                    <h3 className="card-title"> {props.name} </h3>
                    <p className="card-text"> {props.cargo} </p>
                </div>
            </div>
    )
    
}

export default Card;
