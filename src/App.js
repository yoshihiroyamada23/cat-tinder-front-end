import React, { useState } from "react"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Home from "./Pages/Home"
import CatIndex from "./Pages/CatIndex"
import CatShow from "./Pages/CatShow"
import CatNew from "./Pages/CatNew"
import CatEdit from "./Pages/CatEdit"
import NotFound from "./Pages/NotFound"
import mockCats from "./mockCats"
import { Routes, Route } from "react-router-dom"
import './App.css';

const App = () => {
  const [cats, setCats] = useState(mockCats)
  console.log(cats)
  const createCat = (newCat) =>{
    console.log(newCat)
  }
  return (
    <>
      < Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catindex" element={<CatIndex cats={cats} />} />
        <Route path="/catshow/:id" element={<CatShow cats={cats} />} />
        <Route path="/catnew" element={<CatNew createCat={createCat} />} />
        <Route path="/catedit" element={<CatEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      < Footer />
    </>
  )
}
export default App
