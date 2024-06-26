import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import DevLogs from './views/Devlogs';
import Projects from './views/Projects';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="devlogs" element={<DevLogs />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);
