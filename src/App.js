import * as React from 'react'
import NavBar from './components/navbar/NavBar'
import MainContent from './components/main/MainContent'
import Lekcie from './components/lekcie/Lekcie'
import Kvizy from './components/kvizy/Kvizy'
import Footer from './components/footer/Footer'
import Diagramy from './components/Diagramy/Diagramy'
import Cennik from './components/Cennik/Cennik'
import Profil from './components/Profil/Profil'
import Dashboard from './components/Dashboard/Dashboard'
import Nastavenia from './components/Nastavenia/Nastavenia'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/domov" />}></Route>
        <Route path="/domov" element={<MainContent />} />
        <Route path="/lekcie" element={<Lekcie />} />
        <Route path="/kvízy" element={<Kvizy />} />
        <Route path="/diagramy" element={<Diagramy />} />
        <Route path="/cenník" element={<Cennik />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/nastavenia" element={<Nastavenia />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
