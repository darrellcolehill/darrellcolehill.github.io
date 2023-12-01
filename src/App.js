import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import {Navbar} from './components/Navbar/'
import { Header } from './components/Header';
import {TopicCardDeck } from './components/TopicCardDeck';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Splash as SideHustles } from './views/sideHustles/Splash';
import { Splash as Home } from './views/home/Splash';
import { Splash as Projects } from './views/projects/Splash';
import { Splash as WorkExperience } from './views/work/Splash'; 
import { Splash as Resume } from './views/resume/Splash';
import { Splash as Education } from './views/education/Splash';

function App() {

  return (

<div className="App">

  <Navbar/>

  <Home />
  {/* <BrowserRouter>
    <Routes>
        <Route path="/portfolio" element={<Home />}></Route>
        <Route path="/sideHustle" element={<SideHustles />}></Route>
        <Route path="/workExperience" element={<WorkExperience />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/education" element={<Education />}></Route>
    </Routes>
  </BrowserRouter> */}
</div>
  );
}

export default App;
