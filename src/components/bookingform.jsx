export default function BookingForm(props) {
    return (
        <>
            <div className="flex flex-col right p-8 bg-slate-900 bg-opacity-70 rounded-3xl border border-white ">
                <h1 className="text-center text-4xl">{props.formmsg}</h1>
                <p className="text-center text-md">{props.msg}</p>

                <form action="booking.php" method="get" className=" grid grid-cols-2 gap-2  max-md:grid-cols-1 ">

                    <label htmlFor="name" className="text-xl"> First Name</label>
                    <input type="text" name="fname" placeholder="First Name" className="bg-transparent m-2 rounded-2xl border-white " />

                    <label htmlFor="name" className="text-xl"> Last Name</label>
                    <input type="text" name="lname" placeholder="Last Name" className="bg-transparent m-2 rounded-2xl border-white " />

                    <label htmlFor="email" className="text-xl">E-mail</label>
                    <input type="email" name="email" placeholder="Enter E-mail" className="bg-transparent m-2 rounded-2xl border-white" />

                    <label htmlFor="phone" className="text-xl">Phone No.</label>
                    <input type="email" name="phone" placeholder="Enter Phone Number" className="bg-transparent m-2 rounded-2xl border-white" />

                    <label htmlFor="address" className="text-xl">Home Address</label><div className=" md:appearance-none"></div>
                    <input type="text" className="bg-transparent m-2 rounded-2xl border-white" placeholder="street address" />
                    <input type="text" className="bg-transparent m-2 rounded-2xl border-white" placeholder="city" />
                    <input type="text" className="bg-transparent m-2 rounded-2xl border-white" placeholder="state" />
                    <input type="text" className="bg-transparent m-2 rounded-2xl border-white" placeholder="Zip Code" />

                    <label htmlFor="service" className="text-xl">Select the service</label>
                    <select name="service" id="service" className="bg-transparent m-2 rounded-2xl border-white">
                        <option value="Potrait" className="text-black">Potrait</option>
                        <option value="Wedding" className="text-black">Wedding</option>
                        <option value="Pre-Wedding" className="text-black">Pre-Wedding</option>
                        <option value="Industrial" className="text-black">Industrial</option>
                        <option value="baby-shoot" className="text-black">baby-shoot</option>
                        <option value="fashion" className="text-black">fashion</option>
                        <option value="Product" className="text-black">Product</option>
                        <option value="Landscape" className="text-black">Landscape</option>
                    </select>



                </form>

                <p className="text-center text-md m-8">You may also Contact Us at: <br />{props.phone}</p>
            </div>
        </>
    )

}