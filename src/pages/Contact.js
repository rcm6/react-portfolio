import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

function Contact() {

  return (
    <div className="container" id="contact">
      <h2>Contact</h2>

      <form className="justify-content-center">
  <div className="form-outline mb-4">
    <input type="text" id="form4Example1" className="form-control"placeholder="Name" />
  </div>
 
  <div className="form-outline mb-4">
    <input type="email" id="form4Example2" className="form-control" placeholder="Email"></input>
  </div>

  <div className="form-outline mb-4">
    <textarea className="form-control" id="form4Example3" rows="4" placeholder="Message"></textarea>
  </div>

  <button type="submit" className="btn btn-dark btn-block mb-4">Send</button>
</form>

  <div className="text-center">
  <section className="social-media">
  <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/rus-coleman/" role="button">
  <FontAwesomeIcon icon={faLinkedin} className="fa-2xl"/>
  </a>
  <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/rcm6" role="button">
  <FontAwesomeIcon icon={faGithub} className="fa-2xl"/>
  </a>
  <a className="btn btn-outline-light btn-floating m-1" href="mailto:Demo@notrealaddress.com" role="button">
  <FontAwesomeIcon icon={faEnvelope} className="fa-2xl"/>
  </a>
  </section>
  </div>

  </div>
  );
}

export default Contact;