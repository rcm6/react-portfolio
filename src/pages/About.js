import React from "react";
import resume from '../documents/Resume.pdf'

function About() {
  return (
    <div className="container">
      <h2>About</h2>
        <p>I am a multi-skilled digital professional based in Somerset, UK.</p>
        <p>With two decades of experience working in a web design, development and support environment within the public sector.</p>
        <p>I have a broad experience of both frontend and backend development and specialise in creating websites using best practice
          and adherence to WCAG accessibility standards.</p>
      <h3>Skills</h3>
        <ul>
          <li>Languages: HTML5, CSS3, Javascript, Classic ASP, PHP</li>
          <li>Frameworks: Bootstrap, jQuery, ReactJS, NodeJS, ES6</li>
          <li>Database: MS SQL, MySQL</li>
          <li>CMS: Easysite, Wordpress, Umbraco, SAP Netweaver</li>
          <li>Git, Github, Netlify</li>
          <li>API creation and consumption</li>
          <li>Information architecture</li>
          <li>Human computer interaction</li>
          <li>User interaction, interface and experience design</li>
          <li>Visual/graphic design (Adobe creative suite)</li>
          <li>Content design</li>
          <li>Process design</li>
          <li>Responsive web design</li>
          <li>Knowledge of international web and accessibility standards</li>
        </ul>
        <div className="text-right">
        <a href={resume} download="../documents/Resume.pdf" className="btn btn-outline-info">Download my résumé</a>
        </div>
      
    
    </div>
  );
}

export default About;
