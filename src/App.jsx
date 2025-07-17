import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Contact from "./Pages/Contact/Contact"
import NotFound from "./Pages/NotFound/NotFound"
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>

      <Route path="/" element={<Contact/>}/>
        <Route path="/404" element={<NotFound/>}/>


    </Routes>
    <Footer/>
    
    
    
    </BrowserRouter>   
  )
}

export default App
