import React from "react";

const Card = (props) => {
  console.log(props);

  return (
    
    
        <div className="card d-flex ">
          <img src={props.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.cardTitle} </h5>
            <p className="card-text">
              <small className="text-muted">{props.cardText} </small>
            </p>
            <p className="card-text">
              {props.updatedTime }
            </p>
          
          </div>
        </div>
        
        
    
    
  );
};

export default Card;
