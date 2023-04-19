import { Link } from 'react-router-dom'
import './home.css'
import ContactForm from '../components/contactform'
import { AiOutlineFacebook,AiOutlineInstagram,AiOutlineYoutube,AiOutlinePhone } from "react-icons/ai";


export default function Home() {
    return (
        <body>
            <div className="home min-w-full flex justify-center flex-col items-center min-h-screen -z-10">
                <h1 className="blurbg text-6xl text-center max-sm:blurbg max-sm:text-3xl"> Welcome to PVC studio.Com</h1>
                <p className='text-center text-2xl max-sm:text-xl blurbg max-sm:pr-2 max-sm:pl-2'>Hi, We are the photographers for all your Life events &
                    Functions. Your story is important and deserves to be told in
                    the most beautyful way.</p>
                <p className='text-white'>Check Availability & Book Now!</p>
                <button className='btn border-2 rounded-lg p-2 mt-2 hover:bg-slate-200 hover:text-black '><Link to="/Contact"> Book Now </Link>  </button>
            </div>


            <div id="home2" className="home min-w-full h-fit -z-10 blurbgfull">
                <h1 className='text-5xl text-center'>OUR WORK</h1>
                <div className='w-90 grid grid-cols-4 max-sm:grid-cols-1 justify-items-center max-md:grid-cols-2 max-lg:grid-cols-3 '>
                    <Link to="/Services"  className='text-center mb-4'><img src="img/services/product.jpg" alt="product" className='  h-60 w-60 m-5 mb-1 rounded-2xl' />PRODUCT</Link>
                    <Link to="/Services"  className='text-center mb-4'><img src="img/services/wedding.jpg" alt="wedding" className=' h-60 w-60 m-5 mb-1 rounded-2xl' />WEDDING</Link>
                    <Link to="/Services"  className='text-center mb-4'><img src="img/services/prewed.jpg" alt="prewedding" className=' h-60 w-60 m-5 mb-1 rounded-2xl' />PRE - WEDDING</Link>
                    <Link to="/Services"  className='text-center mb-4'><img src="img/services/potrait.jpg" alt="potrait" className=' h-60 w-60 m-5 mb-1 rounded-2xl' />POTRAIT</Link>
                    <Link to="/Services"  className='text-center mb-4'><img src="img/services/fashion.jpg" alt="fashion" className=' h-60 w-60 m-5 mb-1 rounded-2xl' />FASHION</Link>
                    <Link to="/Services"  className='text-center mb-4'><img src="img/services/video.jpg" alt="video" className=' h-60 w-60 m-5 mb-1 rounded-2xl' />VIDEOGRAPHY</Link>
                    <Link to="/Services"  className='text-center mb-4'><img src="img/services/landscape.jpg" alt="landscape" className=' h-60 w-60 m-5 mb-1 rounded-2xl' />LANDSCAPE</Link>
                    <Link to="/Services"  className='text-center mb-4'><img src="img/services/events.jpg" alt="events" className=' h-60 w-60 m-5 mb-1 rounded-2xl' />EVENTS</Link>
                </div>
            </div>
            <div id="home3" className="home min-w-full h-fit -z-10 mt-2 bg-black bg-opacity-70">
                <h1 className='text-5xl text-center max-sm:text-2xl'>Stay Connected With Us</h1>

                <div className='flex flex-row flex-wrap justify-center items-center  min-w-fit h-fit mt-5 max-sm:m-4 '>
                    <div className="">
                        <ContactForm formname="Contact Us" msg="We will get back to you asap!" phone="9878339911"></ContactForm>
                    </div>

                    <div className="flex flex-wrap w-1/2 max-sm:w-11/12">
                        <Link to="/Services"><img src="img/logo.png" alt="logo" className='rounded-2xl h-20 w-20' /></Link>
                        <p className='text-xl blurbg max-sm:text-justify'>
                            Hi, We are the photographers for all your Life events &
                            Functions. Your story is important and deserves to be told in
                            the most beautiful way.
                            We specialize in creating a compiling images of weddings, celebrations and togetherness.</p><br/><br/>
                            <p className="text-center text-md">You may also Contact Us at: <br/>
                            <div className=' max-sm:flex'>
                            <Link to="https://www.facebook.com/"><AiOutlineFacebook size="2rem"></AiOutlineFacebook></Link>
                            <Link to="https://www.instagram.com/"> <AiOutlineInstagram size="2rem"></AiOutlineInstagram></Link>
                            <Link to="https://www.youtube.com/@amanpvcstudio475"><AiOutlineYoutube size="2rem"></AiOutlineYoutube></Link>
                            <Link to="https://voice.google.com/u/0/about"><AiOutlinePhone size="2rem"></AiOutlinePhone></Link>
                                </div> 
                            </p>
                   
                    </div>

                </div>

            </div>

        </body>

    )
}