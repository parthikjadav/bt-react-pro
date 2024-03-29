import React from 'react'
import "./App.css"
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import LogosSection from './components/LogosSection'
import ProductCard from './components/ProductCard'

const App = () => {
  return (
    <div>
      <Header />
      <LandingPage />
      <LogosSection/>
      <ProductCard/>
    </div>
  )
}

export default App
