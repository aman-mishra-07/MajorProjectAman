import BookingForm from "../components/bookingform";


export default function Booking() {
    return (
        <>
            <div className="parent m-10 flex flex-wrap justify-evenly items-center text-white w-full h-fit backdrop-blur-sm">
               
                <BookingForm formmsg="Photography Session Booking Form" msg="Fill the form for booking" phone="9878339911"></BookingForm>
               
                
            </div>
        </>
    )

}