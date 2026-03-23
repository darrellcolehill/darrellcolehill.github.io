import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectPage from "./components/ProjectPage";
import Projects from "./pages/Projects";

const modules = import.meta.glob('./projects/*/index.md', {
  eager: true,
  import: 'default',
  query: 'raw'
});

const App: React.FC = () => {

  console.log(modules);
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />

        {Object.entries(modules).map(([path, content]) => {
          const folderName = path.split('/').slice(-2, -1)[0];
          let txtContent = content as string;
          console.log(txtContent)
          return (
            <Route
              key={folderName}
              path={`/projects/${folderName}`}
              element={
                <ProjectPage
                  title={folderName.replace(/-/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase())}
                  image={`/projects/${folderName}/cover.jpg`}
                  markdownContent={txtContent} 
                />
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default App;