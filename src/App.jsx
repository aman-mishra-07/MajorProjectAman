import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Flowfooter from './components/footer'
import Flownavbar from './components/navbar'  
import Home from './pages/home'
import About from './pages/about'
import Services from './pages/services'
import Pricing from './pages/pricing'
import Contact from './pages/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    
  <>
    <BrowserRouter>
    <Flownavbar></Flownavbar>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/pricing' element={<Pricing />}></Route>
      <Route path='/contact' element={<Contact />}></Route>


    </Routes>
    </BrowserRouter>
   

    <Flowfooter></Flowfooter>
  

  </>
    
  )
}

export default App
