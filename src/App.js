import * as React from 'react'
import NavBar from './components/navbar/NavBar'
import MainContent from './components/main/MainContent'
import Lekcie from './components/lekcie/Lekcie'
import Kvizy from './components/kvizy/Kvizy'
import Footer from './components/footer/Footer'
import Diagramy from './components/Diagramy/Diagramy'
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
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
