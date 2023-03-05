import React from "react";
import "./style.css"




 function Card(props) {
  return (
     <div key={props.key} className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href={props.link} className="btn btn-primary">{props.link}</a>
          

        </div>

      </div>
     </div>


  )
  }


/*
function Card(props) {
  return (
    <div class="col-md-4">

    <div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
  );
}
*/
export default Card;

 


/*
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap"></img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/