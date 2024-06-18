import './App.css'
import { Outlet } from 'react-router-dom';
import DrawerAppBar from './components/DrawerAppBar';

function App() {

  return (
    <>
      <DrawerAppBar/>
      <Outlet />
    </>
  )
}

export default App
