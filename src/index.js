import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import Routes from './routes';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Education} from './views/education/Splash';
import { Projects } from './views/projects/Splash';
import { Resume } from './views/resume/Splash';
import { Work } from './views/work/Splash';
import { Navbar } from './components/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/portfoilo"            element={<App />} />
        <Route path="/portfoilo/education"  element={<Education />} />
        <Route path="/portfoilo/projects"   element={<Projects />} />
        <Route path="/portfoilo/resume"     element={<Resume />} />
        <Route path="/portfoilo/work"       element={<Work />} />
      </Routes>
    </BrowserRouter>
  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
