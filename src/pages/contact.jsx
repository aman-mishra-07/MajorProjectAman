import BookingForm from "../components/bookingform";
import ContactForm from "../components/contactform";


export default function Contact(props) {
    return (
        <>
            <div className="parent mt-10 mb-10 flex flex-wrap flex-row justify-evenly items-center text-white w-full h-fit backdrop-blur-sm max-sm:m-2">
            <BookingForm 
            formmsg="Photography Session Booking Form" 
            msg="Fill the form for booking" 
            phone="Phone - 9878339911" 
            email="Mail - pvcstudio@hotmail.com"
            instagram="Instagram - @aman_pvc"
            facebook="Facebook - pvcstudio"></BookingForm>
               
            </div>
        </>
    )

}