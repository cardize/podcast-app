import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import BrowserPage from './pages/BrowsePage'
import PodcastPage from './pages/PodcastPage'
import './assets/styles/app.scss'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/browse" element={<BrowserPage />} />
        <Route path="/podcast" element={<PodcastPage />} />
      </Routes>
    </Router>
  )
}

export default App
