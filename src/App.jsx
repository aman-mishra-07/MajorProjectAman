import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="pp">
      <div>
        <Navbar></Navbar>
      </div>
      <h1>Aman 4063/20</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ad et in laboriosam fugit perferendis totam, accusantium dolores! Modi architecto neque deserunt pariatur esse officiis, vitae nulla harum dolore omnis, nisi voluptates voluptas iste culpa aut velit reiciendis debitis optio odio aspernatur, mollitia ea quaerat. Eligendi, sequi modi! Ipsum aspernatur dolor temporibus earum distinctio maiores provident similique quae numquam aliquid asperiores iste iusto eveniet beatae, ut voluptas, praesentium ea possimus!</p>
     
      <Footer></Footer>
    </div>
  )
}

export default App
