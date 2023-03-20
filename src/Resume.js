import React from 'react';
import { Navbar } from 'react-bootstrap';
import { useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavT } from './NavT';
import { FileX } from 'react-bootstrap-icons';




export const Resume = () => {

  return (
    
    <div  >



 

      <div style={{paddingLeft:200,paddingTop:200}}>
      <div>
      <h1 >Onur Korkmaz</h1>
      <h2 >Back-End - Front-End Developer</h2>
      <hr />
      <h3 style={{textAlign:"center",width:300,height:80,border:'2px solid white', alignContent:"center",
    boxShadow:"16px 14px 20px",borderRadius:"10px"}}>Education</h3>
      <p  >
        George Brown College | Toronto, ON<br />
        Advanced Diploma | Expected April 2023<br />
        Major in Computer Science<br />
        Relevant Coursework: Advanced Database Development, Advanced Object-Oriented Programming; <br></br> Web Application Development; Data Structures and Algorithms; System Analysis, Design and Testing
      </p>
      <h3  style={{textAlign:"center",width:300,height:80,border:'2px solid white', alignContent:"center",
    boxShadow:"16px 14px 20px",borderRadius:"10px"}}>Work Experience</h3>
      <p>Web Developer</p>
      <p >ABC Company | 2018 - Present</p>
      <ul >
        <li>Learned and applied all design concepts such as OOP, MVC, SOLID used as best practices in the current development stage.</li>
        <li>Applied Agile methodologies to organize tasks and manage control flow for 60+ projects.</li>
        <li>Developed various systems in isolated focus to backend functioning to compute efficiently CRUD operations in various environments using database.</li>
        <li>Developed reusable code using design principles such as OOP, MVC, etc. for more than 30 websites.</li>
        <li>Prepared documentation and different templates so future developers that will join the team will familiarize with the projects in a faster manner.</li>
      </ul>
      <h3 style={{textAlign:"center",width:300,height:80,border:'2px solid white', alignContent:"center",
    boxShadow:"16px 14px 20px",borderRadius:"10px"}} >College Projects</h3>
      <h4 >Capstone Online Tutoring Web and Mobile Application</h4>
      <p >Designed and implemented a Tutorial application system by backend NodeJS and frontend React.</p>
      <>
      <h4 >Online Food Finder Application</h4>
      <p>Designed by using bootstrap and implemented by React Native food finder application system.</p>

      <h4>CRUD Application Software Employee Management System</h4>
      <p>A CRUD application system designed using Bootstrap and developed with Nodejs for the back-end and React for the front-end.</p>
      <h4>System of Sports Administration and Technical Support</h4>
      <p>Designed and implemented a CRUD application system in a 4-person team using .NET.</p>
      <h4>GUI-Based Addressbook CRUD Application</h4>
      <p>Designed and built a CRUD application system in JavaFx.</p>
      <h4>CRUD Application Software Accounting Management System</h4>
      <p>Use server-side scripting language PHP to implement a database-driven solution.</p>
      <h4>Airport Booking System</h4>
      <p>Designed and implemented airport booking application in 3-person team using C#. Enabled users to book and edit booking systems based on 50+ mock airline tickets.</p>
      <h4>Administration System for Retail Stores</h4>
      <p>Designed and implemented a CRUD application system, not only for employees but also items in retail store by using python.</p>
      <h3 style={{textAlign:"center",width:300,height:80,border:'2px solid white', alignContent:"center",
        boxShadow:"16px 14px 20px",borderRadius:"10px"}}>Additional</h3>
      <p>Technical Skills: Spring Boot, Laravel, JavaScript, C#, Python, HTML/CSS; Proficient in Java, Nodejs, React, PHP, React Native</p>
      <p>Languages: Fluent in Turkish, English.</p>
      </>
    </div>

      </div>
      
    </div>

    
  );
};

