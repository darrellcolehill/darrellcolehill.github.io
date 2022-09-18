import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import Routes from './routes';
import { HashRouter, Routes, Route } from "react-router-dom";
import {Splash as Education} from './views/education/Splash';
import { Splash as Projects } from './views/projects/Splash';
import { Splash as Resume } from './views/resume/Splash';
import { Splash as WorkExperience } from './views/work/Splash';
import { Splash as Home } from './views/home/Splash';
import { Splash as SideHustles } from './views/sideHustles/Splash';
import { Navbar } from './components/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navbar/>
    <HashRouter history="hashHistory">
      <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path="/sideHustle" element={<SideHustles />}></Route>
        <Route path="/workExperience" element={<WorkExperience />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/education" element={<Education />}></Route>
      </Routes>
    </HashRouter>
  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
