import { useState } from 'react'
import viteLogo from '/vite.svg'
import MediaMenu from './components/MediaMenu'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <MediaMenu />
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App
