// import React, {useState} from "react";
import "./App.css";




function Card(props) {


  return (
    
         <div className="card h-100">
    {/* <div className="row"> */}
      {/* <div className=""> */}
        {/* <div className="card" style={{ width: "18rem" }}> */}
          <img src={props.image} className="card-img-top" alt="..." />
          <center>
          <div className="card-body">
            <h5 className="card-title">{props.label}</h5>
            <h6 className="card-text">Calories:{props.calories}</h6>
            {/* <p className="card-text  text-sm-start">ingredients: {props.ingredientLines.slice(0,3)}</p> */}
            </div>
          </center>


           
            
          
        {/* </div> */}
      {/* </div> */}
    {/* </div> */}
    </div>
    
   
  );
}

export default Card;
