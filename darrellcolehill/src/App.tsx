import './App.css'
import { Outlet } from 'react-router-dom';
import DrawerAppBar from './components/DrawerAppBar';
import React from 'react';

function App() {

  return (
    <React.Fragment>
      <DrawerAppBar/>
      <Outlet />
    </React.Fragment>
  )
}

export default App
