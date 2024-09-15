import './index.css';
import About from './pages/About'
import Contact from './pages/Contact'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Project from './pages/Project';
import Skills from './pages/Skills';

import Education from './pages/Education';
import Home from './pages/Home.jsx';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/home" />}> </Route>
          <Route path='/home' element={<Home ></Home>}> </Route>
          <Route path='/about' element={<About></About>}> </Route>
          <Route path='/contact' element={<Contact></Contact>}> </Route>
          <Route path='/skill' element={<Skills ></Skills>}> </Route>
          <Route path='/project' element={<Project ></Project>}> </Route>
          <Route path='/education' element={<Education ></Education>}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
