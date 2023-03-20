
import { Carousel } from 'react-bootstrap';

import WebLogo from './assets/img/web-icon.svg';

export const Skills = ()=>{

    const  responsive={}

    return (
    
        <section className="skill" id="skills" style={{paddingLeft:200,paddingTop:200}}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Spring Boot, Laravel, JavaScript, C#, SQL, Python, HTML/CSS; Proficient in Java, Nodejs, React, PHP, GrapHql, React- Native</p>
                                <div className="item">
                                    <img src={WebLogo} alt="Image" style={{height:100,width:100}}/>
                                    <h5>Web Development</h5>
                                    <p>Learned and applied all design concepts such as OOP, MVC, SOLID used as best practices in the current development stage.              
                                          Furthermore, applied Agile methodologies to organize tasks and manage control flow for 60+ projects.</p>
                                    <div className="item">
                                    <img src={WebLogo} alt="Image" style={{height:100,width:100}}/>
                                    <h5>Object-Oriented Programming</h5>
                                    <p>Throughout the course of 3years I used various languages and templating engines such as Java C# PHP, JavaScript, Spring Boot, .NET, etc.
                                    to build 100+bundles of views for products, landing pages, admin dashboards, etc.</p>
                                </div>
                                <div className="item">
                                    <img src={WebLogo} alt="Image" style={{height:100,width:100}}/>
                                    <h5>Web Advanced Database Development</h5>
                                    <p>Developed various systems in isolated focus to backend functioning to compute efficiently CRUD operations in various environments using database.
                                         Analyzed, evaluated and developed new web and database applications with C# , IIS, SQL SERVER</p>
                                </div>
                                <div className="item">
                                    <img src={WebLogo} alt="Image" style={{height:100,width:100}}/>
                                    <h5> Mobile Development</h5>
                                    <p>Developed mobile applications using React Native for iOS and Android platforms.
                                    Collaborated with team members to design and implement user interfaces using React Native components and third-party libraries.
                                    </p>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      )
}