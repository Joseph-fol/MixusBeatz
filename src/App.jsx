import React, { useState } from 'react'
import Home from './Home'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import Modal from './Modal'
import About from './About'

const App = () => {
    const [selectedCard, setSelectedCard] = useState(null)
  return (
    <>
      <Navbar/>
      <Header/>
      <Home onCardClick ={(detail) => setSelectedCard(detail)} />
      <About/>
      <Footer/>

      { selectedCard && (
        <Modal detail={selectedCard} onclose={()=> setSelectedCard(null)}/>     
      )}
    </>
  )
}

export default App