import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import navIcon1 from '../src/assets/img/nav-icon1.svg';
import navIcon2 from '../src/assets/img/nav-icon2.svg';
import navIcon3 from '../src/assets/img/nav-icon3.svg';
import { Resume } from './Resume';
import { Skills } from './Skills';
import {WorkExperience} from "./WorkExperience";
import {CareerGoal} from "./CareerGoal";
import {Banner} from "./Banner";
import {Certificates} from "./Certificates";
import {Capstone} from "./Capstone";
import {CoverLetter} from "./CoverLetter";


// import { useNavigate } from 'react-router-dom';

export const NavT=()=> {
  const [activeLink,setActiveLink]=useState('home')
  const [scrolled,setScrooled]= useState(false);

  useEffect(()=>{
    const onScrool =()=>{
      if(window.scrollY>50){
        setScrooled(true)

      }else{
        setScrooled(false);
      }
    }
    window.addEventListener("scroll",onScrool);
    return ()=> window.removeEventListener("scroll",onScrool)
  },[])
  const onUpdateActiveLink =(value)=>{
    setActiveLink(value);


  }
  const NavigateToResume =(value)=>{
    setActiveLink(value);
window.location='/resume'


  }
  const NavigateToWorkExperience =(value)=>{
    setActiveLink(value);
window.location='/workexperience'
  }

  const NavigateToCareerGoal =(value)=>{
    setActiveLink(value);
    window.location='/careergoal'
  }

  const NavigateToSkills =(value)=>{
    setActiveLink(value);
    window.location='/skills'
  }

  const NavigateToHome =(value)=>{
    setActiveLink(value);
    window.location='/home'
  }
  const NavigateToCertificates =(value)=>{
    setActiveLink(value);
    window.location='/certificates'
  }

  const NavigateToCapstone =(value)=>{
    setActiveLink(value);
    window.location='/capstone'
  }

  const NavigateToCoverLetter =(value)=>{
    setActiveLink(value);
    window.location='/coverletter'
  }


  return (
    <div>
    <Navbar bg="blue" expand="lg" className={scrolled ? "scrolled": ""}>
    
      <Container>
        <Navbar.Brand href="#home">
          <img src={''} alt='' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <span className='navbar-toggler-icon'></span>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link element={ <Certificates />} className={activeLink ==='home' ? 'active navbar-link': 'navbar-link'} onClick={()=>NavigateToCertificates('home')} >Certificates</Nav.Link>
            <Nav.Link element={ <Banner />} className={activeLink ==='home' ? 'active navbar-link': 'navbar-link'} onClick={()=>NavigateToHome('home')} >Home</Nav.Link>
            <Nav.Link element={<Skills />} className={activeLink ==='skills' ? 'active navbar-link': 'navbar-link'} onClick={()=>NavigateToSkills('skills')} >Skills</Nav.Link>
            <Nav.Link element={<Resume />} className={activeLink ==='resume' ? 'active navbar-link': 'navbar-link'}onClick={()=>NavigateToResume('resume')} >Resume</Nav.Link>
            <Nav.Link element={< CareerGoal />} className={activeLink ==='careergoal' ? 'active navbar-link': 'navbar-link'} onClick={()=>NavigateToCareerGoal('careergoal')} >Career Goal</Nav.Link>

            <Nav.Link  element={<Capstone />} className={activeLink ==='capstone' ? 'active navbar-link': 'navbar-link'} onClick={()=>NavigateToCapstone('capstone')} >Capstone </Nav.Link>

            <Nav.Link  element={<WorkExperience />} className={activeLink ==='workexperience' ? 'active navbar-link': 'navbar-link'} onClick={()=>NavigateToWorkExperience('workexperience')} >Work Experience </Nav.Link>
            <Nav.Link  element={<CoverLetter />} className={activeLink ==='coverletter' ? 'active navbar-link': 'navbar-link'} onClick={()=>NavigateToCoverLetter('coverletter')} >Cover Letter </Nav.Link>

          </Nav>

          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='https://www.linkedin.com/in/onur-korkmaz-8a928719b/'><img src={navIcon1} alt="" /></a> 
              <a href='https://www.facebook.com/lhonour/'><img src={navIcon2} alt="" /></a>
              <a href='https://www.instagram.com/ozyyyyy__/'><img src={navIcon3} alt="" /></a>

            </div>
            < button className='vvd' onClick={()=> console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    

    
    </div>
    
    
  );
}
