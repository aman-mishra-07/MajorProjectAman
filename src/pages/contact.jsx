import BookingForm from "../components/bookingform";
import ContactForm from "../components/contactform";

export default function Contact() {
    return (
        <>
            <div className="parent m-10 flex flex-wrap flex-row justify-evenly items-center text-white w-full h-fit backdrop-blur-sm">
                <ContactForm formname="Contact Us" msg="We will get back to you asap!" phone="9878339911"></ContactForm>

                {/* Photography session booking form */}
                <BookingForm formmsg="Photography Session Booking Form" msg="Fill the form for booking" phone="9878339911"></BookingForm>
               
            </div>
        </>
    )

}