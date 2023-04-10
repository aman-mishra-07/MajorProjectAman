export default function ContactForm(props) {
    return(
        <>
        <div className="left p-8 bg-slate-900 bg-opacity-70 rounded-3xl border border-white ">
                    <h1 className="text-center text-4xl">{props.formname}</h1>
                    <p className="text-center text-md">{props.msg}</p>
                    <form action="form.php" className="p-4 flex flex-col ">
                        <label htmlFor="user">Name</label>
                        <input type="text" name="user" placeholder="Enter your name" className="bg-transparent m-2 rounded-2xl border-white " />
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Enter your email" className="bg-transparent m-2 rounded-2xl border-white " />
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" name="phone" placeholder="###-###-####" className="bg-transparent m-2 rounded-2xl border-white " />
                        <input type="submit" value="Submit" className=" bg-sky-700 p-2 m-2 rounded-2xl hover:bg-sky-600 " />
                    
                    </form>
                    <p className="text-center text-md">You may also Contact Us at: <br />{props.phone}</p>
                </div>
        </>
    )
    
}