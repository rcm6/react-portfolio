import React from "react";
import "./style.css";
import image from '../../images/AvatarMaker.png'

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid">
  <div className="container text-center">
    <h1 className="display-4">Russell Coleman</h1>
    <p className="lead">Web design and development portfolio</p>
    <img src={image} alt="avatar of russell coleman" class="avatar"></img>
  </div>
</div>
  );
}

export default Header;
