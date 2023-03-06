import React from "react";
import "./style.css"

 function Card(props) {
  return (
     <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-self-stretch">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}
          <hr></hr>
          {props.technologies}
          <hr></hr>
          </p>
          </div>
          <div class="mt-auto border border-danger">
          { props.linkLive !=="" && <a href={props.linkLive} className="btn btn-dark card-margin-right">Live Site</a>}
          <a href={props.linkRepo} className="btn btn-light">Github Repo</a>
          </div>
          
        
      </div>
     </div>


  )
  }
export default Card;