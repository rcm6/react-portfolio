import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';


function Contact() {
  return (
    <div className="container text-centre" id="contact">
      <h2>Contact</h2>

      <ul>
    <li><a href="http://github.com/rcm6"><FontAwesomeIcon icon={faGithub} /></a></li>
    <li><a href="http://github.com/rcm6"><FontAwesomeIcon icon={faLinkedin} /></a></li>
    <li><a href="http://github.com/rcm6"><FontAwesomeIcon icon={faEnvelope} /></a></li>
</ul>
    </div>
  );
}

export default Contact;
