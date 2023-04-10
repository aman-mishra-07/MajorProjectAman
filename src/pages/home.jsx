import { Link } from 'react-router-dom'
import './home.css'

export default function Home(){
    return(
        <body>
        <div className="home min-w-full flex justify-center flex-col items-center min-h-screen -z-10">
        <h1  className="blurbg text-5xl text-center max-sm:blurbg max-sm:text-3xl"> Welcome to PVC studio.Com</h1>
        <p className='text-center text-xl blurbg'>Hi, We are the photographers for all your Life events &
            Functions. Your story is important and deserves to be told in
            the most beautyful way.</p>
        <p className='text-white'>Check Availability & Book Now!</p>
        <button className='btn blurbg border-2 rounded-lg p-2 mt-2 '><Link to="/Contact"> Book Now </Link>  </button>
              </div>

              
        <div id ="home2" className="home min-w-full h-fit -z-10 blurbgfull">
        <h1 className='text-5xl text-center'>OUR WORK</h1>
        <div className='w-90 grid grid-cols-4 max-sm:grid-cols-1 justify-items-center max-md:grid-cols-2 max-lg:grid-cols-3 '>
            <Link to="/Services"><img  src="img/services/product.jpg" alt="product" className='  h-60 w-60 m-5 rounded-2xl' /></Link>
            <Link to="/Services"><img  src="img/services/wedding.jpg" alt="wedding" className=' h-60 w-60 m-5 rounded-2xl' /></Link>
            <Link to="/Services"><img  src="img/services/prewed.jpg" alt="prewedding" className=' h-60 w-60 m-5 rounded-2xl' /></Link>
            <Link to="/Services"><img  src="img/services/potrait.jpg" alt="potrait" className=' h-60 w-60 m-5 rounded-2xl' /></Link>
            <Link to="/Services"><img  src="img/services/fashion.jpg" alt="fashion" className=' h-60 w-60 m-5 rounded-2xl' /></Link>
            <Link to="/Services"><img  src="img/services/video.jpg" alt="video" className=' h-60 w-60 m-5 rounded-2xl' /></Link>
            <Link to="/Services"><img  src="img/services/landscape.jpg" alt="landscape" className=' h-60 w-60 m-5 rounded-2xl' /></Link>
            <Link to="/Services"><img  src="img/services/events.jpg" alt="events" className=' h-60 w-60 m-5 rounded-2xl' /></Link>
        </div>
        
               
         
        </div>

        </body>

    )
}