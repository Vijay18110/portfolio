import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import About from './pages/About'
import Contact from './pages/Contact'
import Work from './pages/Works'
import './index.css'
import 'bootstrap/dist//css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<App></App>}> </Route>
        <Route path='/about' element={<About ></About>}> </Route>
        <Route path='/contact' element={<Contact></Contact>}> </Route>
        <Route path='/work' element={<Work></Work>}> </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
