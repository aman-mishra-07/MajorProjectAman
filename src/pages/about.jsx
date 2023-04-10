import './home.css'
export default function About(){

    return(
       <>
    <div className="min-w-full flex flex-col p-10 min-h-fit">
        <h1  className="blurbg text-5xl -z-20"> About Us</h1>
        <p className='text-xl blurbg -z-20'>
            Hi, We are the photographers for all your Life events &
            Functions. Your story is important and deserves to be told in
            the most beautiful way.
            We specialize in creating a compiling images of weddings, celebrations and togetherness.

            Driven by a passion for photographic excellence and possessing years of experience capture the emotions and joy of the moment whether it be of the happy wedding copule, your family or portaits.
            <p className='text-xl blurbg -z-20 max-sm:hidden'>
            The team of PVC studio consists of professional and experienced photographers, videographers and editors who have an expertise in capturing any of your wonderful moments using both, candid and traditional, styles of photography and videography. They ensure to deliver the photos and videos of your functions within fifteen to twenty days post editing and selection of the final ones. 
            <br/><br />PVC studio is a photography studio located in Dhanas, Chandigarh. We offer a wide range of photography and videography services to capture each moment of your nuptial ceremonies the way you dream us to be. Be it any of your wedding functions, we are always present at the right time to capture your special moments with the utmost perfection. Photos are something which takes you down the memory lane in no time and if you are looking for an excellent photography studio to shoot your wedding flawlessly, then PVC studio is the choice that you should absolutely make.
            </p>
        
        </p>
    </div>
       <div className="min-w-full flex flex-row flex-wrap p-10 text-white bg-black bg-opacity-40 justify-center align-middle">
        <div className="dcards m-2 p-2 rounded-lg h-12 w-1/4 text-center backdrop-blur-3xl bg-blue-700 shadow shadow-white max-sm:w-3/4">70+ projects</div>
        <div className="dcards m-2 p-2 rounded-lg h-12 w-1/4 text-center backdrop-blur-3xl bg-blue-700 shadow shadow-white max-sm:w-3/4">3 years Experience</div>
        <div className="dcards m-2 p-2 rounded-lg h-12 w-1/4 text-center backdrop-blur-3xl bg-blue-700 shadow shadow-white max-sm:w-3/4">12 Employees</div>


       </div>
       
       
       
       </>

    )
}