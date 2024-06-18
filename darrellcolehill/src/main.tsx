import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import DevLogs from './views/Devlogs';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="page1" element={<DevLogs />} />
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);
