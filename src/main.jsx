import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Skill from './Skill.jsx'
import Contact from './Contact.jsx'
import Project from './Project.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/home' element={<Navigate to='/' replace />}></Route>
      <Route path='/skill' element={<Skill />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/project' element={<Project />}></Route>
    </Routes>
  </BrowserRouter>
)
