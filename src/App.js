import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import NotFound from './pages/NotFound'
import mockCats from './mockCats'
import { Routes, Route } from "react-router-dom"
import './App.css'

const App = () => {
  const createCat = (cat) => {
    console.log(cat)
  }

  const updateCat = (cat, id) => {
    console.log(cat)
    console.log(id)
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catindex" element={<CatIndex cats={mockCats} />} />
        <Route path="/catshow/:id" element={<CatShow cats={mockCats} />} />
        <Route path="/catnew" element={<CatNew createCat={createCat} />} />
        <Route path="/catedit/:id" element={<CatEdit updateCat={updateCat} cats={mockCats} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App