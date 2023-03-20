import logo from './logo.svg';
import './App.css';

import { Banner } from './Banner';
import { Resume } from './Resume';
import { Skills } from './Skills';
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WorkExperience } from './WorkExperience';
import { NavT } from './NavT';
import {CareerGoal} from "./CareerGoal";
import {Certificates} from "./Certificates";
import {Capstone} from "./Capstone";
import {CoverLetter} from "./CoverLetter";

function App() {
  
  return (
    <div className="App">
      <NavT/>
     <Router>
       <Routes>
       <Route path={"/"} element={<Banner />}/>
           <Route path={"/home"} element={<Banner />}/>
       <Route path={"/resume"} element={<Resume />}/>
       <Route path={"/skills"} element={<Skills />}/>
       <Route path={"/workexperience"} element={<WorkExperience />}/>
        <Route path={"/careergoal"} element={<CareerGoal />}/>
           <Route path={"/certificates"} element={<Certificates />}/>
           <Route path={"/capstone"} element={<Capstone />}/>
           <Route path={"/coverletter"} element={<CoverLetter />}/>



       </Routes>
      </Router>

  
      
    </div>
  );
}

export default App;
